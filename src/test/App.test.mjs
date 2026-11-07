import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import vm from 'node:vm'
import ts from 'typescript'

const require = createRequire(import.meta.url)
const source = readFileSync(new URL('../pages/Home.tsx', import.meta.url), 'utf8')
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX } }).outputText
let slots = [], cursor = 0
let liveStatus = 'Beta 3.6.2'
const storage = new Map()
const windowMock = { matchMedia: () => ({ matches: false }), localStorage: { setItem: (key, value) => storage.set(key, value) } }
const documentMock = { documentElement: { dataset: { theme: 'dark' } }, getElementById: () => null }
const hooks = {
  useState(initial) { const i = cursor++; if (!(i in slots)) slots[i] = typeof initial === 'function' ? initial() : initial; return [slots[i], value => { slots[i] = value }] },
  useRef(initial) { const i = cursor++; if (!(i in slots)) slots[i] = { current: initial }; return slots[i] },
  useEffect() {},
}
const module = { exports: {} }
vm.runInNewContext(compiled, { exports: module.exports, window: windowMock, document: documentMock, require(id) {
  if (id === 'react') return hooks
  if (id === 'react-dom') return { flushSync: fn => fn() }
  if (id === '@/hooks/useDoubleLinkVersion') return { useDoubleLinkVersion: () => liveStatus }
  if (id === '@/components/icons') return { NaniLabsMark: () => null }
  if (id === '@/utils/seo') return { useSeo: () => {} }
  return require(id)
} })
function render() { cursor = 0; return module.exports.Home() }
function find(node, predicate, results = []) {
  if (Array.isArray(node)) node.forEach(child => find(child, predicate, results))
  else if (node && typeof node === 'object' && node.props) {
    if (predicate(node)) results.push(node)
    find(node.props.children, predicate, results)
  }
  return results
}
test('el tema cambia entre oscuro y claro y conserva la elección', () => {
  slots = []; storage.clear(); documentMock.documentElement.dataset.theme = 'dark'
  let tree = render()
  let toggle = find(tree, n => n.props.className === 'theme-toggle')[0]
  assert.equal(toggle.props['aria-pressed'], false)
  toggle.props.onClick()
  tree = render(); toggle = find(tree, n => n.props.className === 'theme-toggle')[0]
  assert.equal(toggle.props['aria-pressed'], true)
  assert.equal(documentMock.documentElement.dataset.theme, 'light')
  assert.equal(storage.get('nanilabs-theme'), 'light')
  toggle.props.onClick()
  assert.equal(documentMock.documentElement.dataset.theme, 'dark')
  assert.equal(storage.get('nanilabs-theme'), 'dark')
  slots = []; documentMock.documentElement.dataset.theme = 'light'
  assert.equal(find(render(), n => n.props.className === 'theme-toggle')[0].props['aria-pressed'], true)
})
test('explorador presenta seis productos y cambia de escena con clic y teclado', () => {
  slots = []
  let tree = render()
  let tabs = find(tree, n => n.props.role === 'tab')
  assert.equal(tabs.length, 6)
  assert.equal(tabs[0].props['aria-selected'], true)
  tabs[2].props.onClick()
  tree = render(); tabs = find(tree, n => n.props.role === 'tab')
  assert.equal(tabs[2].props['aria-selected'], true)
  assert.equal(find(tree, n => n.props.role === 'tabpanel')[0].props['aria-labelledby'], 'tab-dobre')
  let prevented = false
  tabs[2].props.onKeyDown({ key: 'End', preventDefault() { prevented = true } })
  tree = render(); tabs = find(tree, n => n.props.role === 'tab')
  assert.equal(prevented, true)
  assert.equal(tabs[5].props['aria-selected'], true)
})
test('filtro de tecnologías muestra únicamente productos relacionados', () => {
  slots = []
  let tree = render()
  const python = find(tree, n => n.type === 'button' && n.props.children === 'Python')[0]
  python.props.onClick()
  tree = render()
  const cards = find(tree, n => typeof n.props.className === 'string' && n.props.className.startsWith('gallery-card '))
  assert.equal(cards.length, 1)
  assert.equal(cards[0].props.id, 'proyecto-organeyes')
})
test('DoubleLink muestra la versión sincronizada en escenario y galería', () => {
  slots = []; liveStatus = 'Beta 9.8.7'
  let tree = render()
  find(tree, n => n.props.id === 'tab-doublelink')[0].props.onClick()
  tree = render()
  const badges = find(tree, n => n.props.className === 'live-status' && n.props.children === 'Beta 9.8.7')
  assert.equal(badges.length, 2)
  liveStatus = 'Beta 3.6.2'
})
test('hook de versión usa el estado actualizado del catálogo', () => {
  const hookSource = readFileSync(new URL('../hooks/useDoubleLinkVersion.ts', import.meta.url), 'utf8')
  const hookCode = ts.transpileModule(hookSource, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText
  const hookModule = { exports: {} }
  let status = 'Beta 3.6.2'
  vm.runInNewContext(hookCode, { exports: hookModule.exports, require: () => ({ useProjects: () => ({ getProjectById: id => id === 'doublelink' ? { status } : undefined }) }) })
  assert.equal(hookModule.exports.useDoubleLinkVersion(), 'Beta 3.6.2')
  status = 'Beta 4.0.0'
  assert.equal(hookModule.exports.useDoubleLinkVersion(), 'Beta 4.0.0')
})
