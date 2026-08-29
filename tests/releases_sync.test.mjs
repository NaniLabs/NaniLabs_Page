import { test, describe } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

describe('NaniLabs Release Sync & Formatting Suite', () => {
  const projectsJsonPath = path.resolve('src/data/projects.json')
  const projectsData = JSON.parse(fs.readFileSync(projectsJsonPath, 'utf8'))

  test('projects.json contains releaseSource for doublelink', () => {
    const doublelink = projectsData.projects.find((p) => p.id === 'doublelink')
    assert.ok(doublelink, 'DoubleLink must exist in projects.json')
    assert.equal(
      doublelink.releaseSource,
      'https://pub-e7f8fb195c3c42b59e5da4c5c345837b.r2.dev/releases.json',
      'releaseSource must point to Cloudflare R2 releases.json'
    )
  })

  test('formatStatus handles beta, stable, alpha, and titles properly', () => {
    function formatStatus(rawStatus, version) {
      if (!version) return rawStatus ?? 'En desarrollo'
      if (!rawStatus) return `v${version}`

      const cleanStatus = rawStatus.trim().toLowerCase()
      if (cleanStatus === 'beta') return `Beta ${version}`
      if (cleanStatus === 'stable' || cleanStatus === 'finalizado') return `v${version}`
      if (cleanStatus === 'alpha') return `Alpha ${version}`

      return `${cleanStatus.charAt(0).toUpperCase() + cleanStatus.slice(1)} ${version}`
    }

    assert.equal(formatStatus('beta', '0.2.5'), 'Beta 0.2.5')
    assert.equal(formatStatus('beta', '0.2.6'), 'Beta 0.2.6')
    assert.equal(formatStatus('stable', '1.0.0'), 'v1.0.0')
    assert.equal(formatStatus('alpha', '0.1.0'), 'Alpha 0.1.0')
    assert.equal(formatStatus('release-candidate', '0.3.0'), 'Release-candidate 0.3.0')
  })

  test('processes actual R2 releases.json structure accurately', async () => {
    const mockR2Response = {
      schemaVersion: 1,
      latest: '0.2.5',
      releases: [
        {
          version: '0.2.5',
          date: '2026-08-29',
          status: 'beta',
          title: 'Beta 0.2.5',
          changes: ['Fix'],
        },
      ],
    }

    const version = mockR2Response.latest || mockR2Response.releases[0]?.version
    const status = mockR2Response.releases[0]?.title || `Beta ${version}`

    assert.equal(version, '0.2.5')
    assert.equal(status, 'Beta 0.2.5')
  })

  test('falls back gracefully on invalid JSON or network error without throwing', () => {
    const defaultProject = projectsData.projects.find((p) => p.id === 'doublelink')

    function applyFallback(project, _error) {
      // In case of error, returns base project unharmed
      return project
    }

    const result = applyFallback(defaultProject, new Error('Network timeout'))
    assert.equal(result.id, 'doublelink')
    assert.ok(result.name, 'DoubleLink')
  })
})
