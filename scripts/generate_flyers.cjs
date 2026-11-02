const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const PUBLIC_DIR = path.resolve(__dirname, '../public');
const OUTPUT_DIR = path.resolve(__dirname, '../public/flyers');
const DATA = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../src/data/flyers.json'), 'utf8'));

const fontFile = (family, weight) => path.resolve(__dirname, `../node_modules/@fontsource/${family}/files/${family}-latin-${weight}-normal.woff2`);
const fontData = (family, weight) => {
  const p = fontFile(family, weight);
  return fs.existsSync(p) ? `data:font/woff2;base64,${fs.readFileSync(p).toString('base64')}` : '';
};

const fontSpace700 = fontData('space-grotesk', 700);
const fontSpace600 = fontData('space-grotesk', 600);
const fontInter400 = fontData('inter-tight', 400);
const fontInter500 = fontData('inter-tight', 500);

const logos = {
  nanilabs: path.resolve(PUBLIC_DIR, 'favicon.svg'),
  doublelink: path.resolve(PUBLIC_DIR, 'projects/doublelink.png'),
  saas: path.resolve(PUBLIC_DIR, 'projects/nanilabs-saas.png'),
  dobre: path.resolve(PUBLIC_DIR, 'projects/dobre.png'),
  aquamarine: path.resolve(PUBLIC_DIR, 'projects/aquamarine.png'),
  organeyes: path.resolve(PUBLIC_DIR, 'projects/organeyes.png'),
};

const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const imageData = filename => `data:${path.extname(filename) === '.svg' ? 'image/svg+xml' : 'image/png'};base64,${fs.readFileSync(filename).toString('base64')}`;
const logosData = Object.fromEntries(Object.entries(logos).map(([key, file]) => [key, imageData(file)]));

function renderSymbol(key) {
  if (key === 'nanilabs') {
    return `<svg viewBox="12 12 76 76" width="100%" height="100%"><image href="${logosData.nanilabs}" width="100" height="100"/></svg>`;
  }
  if (key === 'doublelink') {
    return `<svg viewBox="300 220 654 530" width="100%" height="100%"><image href="${logosData.doublelink}" width="1254" height="1254"/><rect x="0" y="745" width="1254" height="510" fill="#000000"/></svg>`;
  }
  if (key === 'dobre') {
    return `<svg viewBox="320 220 614 530" width="100%" height="100%"><image href="${logosData.dobre}" width="1254" height="1254"/><rect x="0" y="748" width="1254" height="510" fill="#000000"/></svg>`;
  }
  if (key === 'saas') {
    return `<svg viewBox="310 215 430 355" width="100%" height="100%"><defs><clipPath id="saas-clip"><rect x="0" y="0" width="1024" height="568"/></clipPath></defs><image href="${logosData.saas}" width="1024" height="1024" clip-path="url(#saas-clip)"/></svg>`;
  }
  if (key === 'aquamarine') {
    return `<svg viewBox="240 240 774 774" width="100%" height="100%"><image href="${logosData.aquamarine}" width="1254" height="1254"/></svg>`;
  }
  if (key === 'organeyes') {
    return `<svg viewBox="280 210 694 550" width="100%" height="100%"><image href="${logosData.organeyes}" width="1254" height="1254"/><rect x="0" y="758" width="1254" height="500" fill="#000000"/></svg>`;
  }
  return '';
}

const COMMON_HEAD = `
<meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap');
  ${fontSpace700 ? `@font-face { font-family: 'Space Grotesk'; font-weight: 700; src: url(${fontSpace700}) format('woff2'); }` : ''}
  ${fontSpace600 ? `@font-face { font-family: 'Space Grotesk'; font-weight: 600; src: url(${fontSpace600}) format('woff2'); }` : ''}
  ${fontInter400 ? `@font-face { font-family: 'Inter Tight'; font-weight: 400; src: url(${fontInter400}) format('woff2'); }` : ''}
  ${fontInter500 ? `@font-face { font-family: 'Inter Tight'; font-weight: 500; src: url(${fontInter500}) format('woff2'); }` : ''}

  * { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #08090c;
    --card: #101218;
    --surface: #13161e;
    --border: #222632;
    --text: #f4f4f5;
    --muted: #9ca3af;
    --subtle: #646b78;
    --cyan: #06b6d4;
  }

  body {
    width: 1080px;
    height: 1920px;
    background-color: var(--bg);
    background-image:
      linear-gradient(to right, rgba(255,255,255,0.016) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.016) 1px, transparent 1px);
    background-size: 60px 60px;
    color: var(--text);
    font-family: 'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif;
    overflow: hidden;
    position: relative;
    padding: 165px 84px;
    text-align: left;
    -webkit-font-smoothing: antialiased;
  }

  .symbol-box {
    background: #000000;
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    flex-shrink: 0;
  }
</style>
`;

// LAYOUT A: Bloques 2x2
function renderLayoutA(d) {
  return `<!DOCTYPE html>
<html lang="es">
<head>${COMMON_HEAD}</head>
<body>
  <div style="width: 100%; height: 100%; display: grid; grid-template-rows: 70px 430px 430px 310px 160px; gap: 47px;">
    
    <!-- Fila 1: Top bar -->
    <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border);">
      <div style="display: flex; align-items: center; gap: 16px;">
        <div style="width: 34px; height: 34px;">${renderSymbol('nanilabs')}</div>
        <span style="font-family: 'Space Grotesk', sans-serif; font-size: 24px; font-weight: 600; color: var(--text);">NaniLabs</span>
      </div>
      <span style="font-size: 22px; color: var(--subtle); font-weight: 500;">${escape(d.meta)}</span>
    </div>

    <!-- Fila 2: Hero Identity -->
    <div style="display: flex; flex-direction: column; justify-content: space-between;">
      <div class="symbol-box" style="width: 168px; height: 168px; border-radius: 36px; padding: 26px;">
        ${renderSymbol(d.logo)}
      </div>
      <div>
        <h1 style="font-family: 'Space Grotesk', sans-serif; font-size: 92px; font-weight: 700; letter-spacing: -0.035em; line-height: 1; color: var(--text); margin-bottom: 20px;">
          ${escape(d.name)}
        </h1>
        <p style="font-size: 38px; font-weight: 400; color: var(--muted); letter-spacing: -0.01em;">
          ${escape(d.subtitle)}
        </p>
      </div>
    </div>

    <!-- Fila 3: Grilla 2x2 de 4 bloques -->
    <div style="display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 22px;">
      ${d.items.map((item, idx) => `
        <div style="background: var(--card); border: 1px solid var(--border); border-radius: 22px; padding: 34px 40px; display: flex; flex-direction: column; justify-content: space-between;">
          <span style="font-family: 'Space Grotesk', sans-serif; font-size: 22px; font-weight: 600; color: var(--subtle);">0${idx + 1}</span>
          <span style="font-family: 'Space Grotesk', sans-serif; font-size: 33px; font-weight: 600; color: var(--text); letter-spacing: -0.02em; line-height: 1.15;">
            ${escape(item)}
          </span>
        </div>
      `).join('')}
    </div>

    <!-- Fila 4: Espacio limpio de 310px para el Sticker de Link de Instagram -->
    <div></div>

    <!-- Fila 5: Barra de link inferior -->
    <div style="background: var(--card); border: 1px solid var(--border); border-radius: 24px; padding: 0 48px; display: flex; align-items: center; justify-content: space-between;">
      <span style="font-family: 'Space Grotesk', sans-serif; font-size: 42px; font-weight: 700; color: var(--text); letter-spacing: -0.02em;">
        ${escape(d.domain)}
      </span>
      <span style="font-family: 'Space Grotesk', sans-serif; font-size: 34px; color: var(--muted);">
        ↗
      </span>
    </div>

  </div>
</body>
</html>`;
}

// LAYOUT B: Ficha técnica con filas concretas
function renderLayoutB(d) {
  return `<!DOCTYPE html>
<html lang="es">
<head>${COMMON_HEAD}</head>
<body>
  <div style="width: 100%; height: 100%; display: grid; grid-template-rows: 70px 330px 530px 310px 140px; gap: 52px;">
    
    <!-- Fila 1: Top bar -->
    <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border);">
      <div style="display: flex; align-items: center; gap: 16px;">
        <div style="width: 34px; height: 34px;">${renderSymbol('nanilabs')}</div>
        <span style="font-family: 'Space Grotesk', sans-serif; font-size: 24px; font-weight: 600; color: var(--text);">NaniLabs</span>
      </div>
      <span style="font-size: 22px; color: var(--subtle); font-weight: 500;">${escape(d.meta)}</span>
    </div>

    <!-- Fila 2: Identidad Principal -->
    <div style="background: var(--card); border: 1px solid var(--border); border-radius: 26px; padding: 0 52px; display: flex; align-items: center; gap: 44px;">
      <div class="symbol-box" style="width: 184px; height: 184px; border-radius: 36px; padding: 28px;">
        ${renderSymbol(d.logo)}
      </div>
      <div>
        <h1 style="font-family: 'Space Grotesk', sans-serif; font-size: 76px; font-weight: 700; letter-spacing: -0.035em; line-height: 1.02; color: var(--text); margin-bottom: 16px;">
          ${escape(d.name)}
        </h1>
        <p style="font-size: 34px; color: var(--muted); font-weight: 400;">
          ${escape(d.subtitle)}
        </p>
      </div>
    </div>

    <!-- Fila 3: Tarjeta de datos concretos -->
    <div style="background: var(--card); border: 1px solid var(--border); border-radius: 26px; padding: 16px 52px; display: flex; flex-direction: column; justify-content: space-evenly;">
      ${d.rows.map((r, i) => `
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 38px 0; ${i < d.rows.length - 1 ? 'border-bottom: 1px solid var(--border);' : ''}">
          <span style="font-size: 30px; color: var(--subtle); font-weight: 500;">${escape(r[0])}</span>
          <span style="font-family: 'Space Grotesk', sans-serif; font-size: 33px; color: var(--text); font-weight: 600; letter-spacing: -0.015em;">${escape(r[1])}</span>
        </div>
      `).join('')}
    </div>

    <!-- Fila 4: Espacio limpio de 310px para pegar el Sticker de Link de IG -->
    <div></div>

    <!-- Fila 5: Pie inferior -->
    <div style="border-top: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between;">
      <span style="font-family: 'Space Grotesk', sans-serif; font-size: 44px; font-weight: 700; color: var(--text); letter-spacing: -0.025em;">
        ${escape(d.domain)}
      </span>
      <span style="font-size: 24px; color: var(--subtle); font-weight: 500;">
        @nanilabs.lat
      </span>
    </div>

  </div>
</body>
</html>`;
}

// LAYOUT C: Índice Modular con Statement concreto
function renderLayoutC(d) {
  return `<!DOCTYPE html>
<html lang="es">
<head>${COMMON_HEAD}</head>
<body>
  <div style="width: 100%; height: 100%; display: grid; grid-template-rows: 150px 240px 540px 310px 140px; gap: 52px;">
    
    <!-- Fila 1: Encabezado con logo -->
    <div style="display: flex; align-items: center; justify-content: space-between;">
      <div style="display: flex; align-items: center; gap: 34px;">
        <div class="symbol-box" style="width: 148px; height: 148px; border-radius: 32px; padding: 22px;">
          ${renderSymbol(d.logo)}
        </div>
        <div>
          <div style="font-family: 'Space Grotesk', sans-serif; font-size: 60px; font-weight: 700; color: var(--text); letter-spacing: -0.03em; line-height: 1.05;">
            ${escape(d.name)}
          </div>
          <div style="font-size: 27px; color: var(--subtle); margin-top: 8px; font-weight: 500;">
            ${escape(d.meta)}
          </div>
        </div>
      </div>
      <div style="width: 44px; height: 44px;">
        ${renderSymbol('nanilabs')}
      </div>
    </div>

    <!-- Fila 2: Statement concreto -->
    <div style="border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); display: flex; align-items: center;">
      <h1 style="font-family: 'Space Grotesk', sans-serif; font-size: 68px; font-weight: 700; line-height: 1.1; letter-spacing: -0.035em; color: var(--text);">
        ${escape(d.statement)}
      </h1>
    </div>

    <!-- Fila 3: 3 Módulos de datos -->
    <div style="display: grid; grid-template-rows: 1fr 1fr 1fr; gap: 24px;">
      ${d.modules.map((m, idx) => `
        <div style="background: var(--card); border: 1px solid var(--border); border-radius: 22px; padding: 0 46px; display: flex; align-items: center; gap: 36px;">
          <span style="font-family: 'Space Grotesk', sans-serif; font-size: 28px; font-weight: 600; color: var(--subtle);">0${idx + 1}</span>
          <span style="font-family: 'Space Grotesk', sans-serif; font-size: 36px; font-weight: 600; color: var(--text); letter-spacing: -0.015em;">${escape(m)}</span>
        </div>
      `).join('')}
    </div>

    <!-- Fila 4: Espacio limpio de 310px para pegar el Sticker de Link de IG -->
    <div></div>

    <!-- Fila 5: Pie con línea superior -->
    <div style="border-top: 2px solid var(--text); display: flex; align-items: center; justify-content: space-between;">
      <span style="font-family: 'Space Grotesk', sans-serif; font-size: 46px; font-weight: 700; color: var(--text); letter-spacing: -0.025em;">
        ${escape(d.domain)}
      </span>
      <span style="font-family: 'Space Grotesk', sans-serif; font-size: 24px; color: var(--muted); font-weight: 500;">
        nanilabs.lat
      </span>
    </div>

  </div>
</body>
</html>`;
}

// LAYOUT D: 2 Proyectos en un solo flyer (Split)
function renderLayoutD(d) {
  return `<!DOCTYPE html>
<html lang="es">
<head>${COMMON_HEAD}</head>
<body>
  <div style="width: 100%; height: 100%; display: grid; grid-template-rows: 70px 180px 690px 310px 160px; gap: 42px;">
    
    <!-- Fila 1: Top bar -->
    <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border);">
      <div style="display: flex; align-items: center; gap: 16px;">
        <div style="width: 34px; height: 34px;">${renderSymbol('nanilabs')}</div>
        <span style="font-family: 'Space Grotesk', sans-serif; font-size: 24px; font-weight: 600; color: var(--text);">NaniLabs</span>
      </div>
      <span style="font-size: 22px; color: var(--subtle); font-weight: 500;">${escape(d.meta)}</span>
    </div>

    <!-- Fila 2: Header -->
    <div>
      <h1 style="font-family: 'Space Grotesk', sans-serif; font-size: 84px; font-weight: 700; letter-spacing: -0.035em; line-height: 1; margin-bottom: 16px;">
        ${escape(d.title || d.name)}
      </h1>
      <p style="font-size: 34px; color: var(--muted); font-weight: 400;">
        ${escape(d.subtitle)}
      </p>
    </div>

    <!-- Fila 3: 2 Proyectos destacados -->
    <div style="display: grid; grid-template-rows: 1fr 1fr; gap: 24px;">
      ${d.split.map(item => `
        <div style="background: var(--card); border: 1px solid var(--border); border-radius: 26px; padding: 36px 42px; display: flex; align-items: center; gap: 36px;">
          <div style="background: #000; border: 1px solid var(--border); border-radius: 28px; width: 148px; height: 148px; padding: 20px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            ${renderSymbol(item.logo)}
          </div>
          <div style="flex: 1;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
              <h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 46px; font-weight: 700;">${escape(item.name)}</h2>
              <span style="background: #161c24; border: 1px solid #22303c; color: #67e8f9; font-size: 20px; font-weight: 600; padding: 6px 14px; border-radius: 8px;">${escape(item.badge)}</span>
            </div>
            <p style="font-size: 28px; color: var(--muted); line-height: 1.25; margin-bottom: 12px;">
              ${escape(item.desc)}
            </p>
            <span style="font-size: 22px; color: var(--subtle); font-weight: 500;">
              ${escape(item.sub)}
            </span>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Fila 4: Espacio limpio de 310px para el Sticker de Link de Instagram -->
    <div></div>

    <!-- Fila 5: Barra de link inferior -->
    <div style="background: var(--card); border: 1px solid var(--border); border-radius: 24px; padding: 0 48px; display: flex; align-items: center; justify-content: space-between;">
      <span style="font-family: 'Space Grotesk', sans-serif; font-size: 42px; font-weight: 700; letter-spacing: -0.02em;">
        ${escape(d.domain)}
      </span>
      <span style="font-family: 'Space Grotesk', sans-serif; font-size: 34px; color: var(--muted);">
        ↗
      </span>
    </div>

  </div>
</body>
</html>`;
}

function renderFlyer(f) {
  if (f.layout === 'A') return renderLayoutA(f);
  if (f.layout === 'B') return renderLayoutB(f);
  if (f.layout === 'C') return renderLayoutC(f);
  if (f.layout === 'D') return renderLayoutD(f);
  return renderLayoutA(f);
}

function renderGallery() {
  const projectSections = DATA.projects.map(project => `
    <section class="group" data-project="${project.id}">
      <header>
        <div>
          <p>${escape(project.status)} · ${escape(project.domain)}</p>
          <h2>${escape(project.name)}</h2>
          <span>${escape(project.description)}</span>
        </div>
        <div class="links">
          <a href="${escape(project.url)}" target="_blank" rel="noreferrer">Abrir proyecto ↗</a>
          <button onclick="copy('${escape(project.url)}',this)">Copiar link</button>
        </div>
      </header>
      <div class="grid">
        ${DATA.flyers.filter(f => f.project === project.id).map(f => `
          <article class="card" data-variant="${f.variant}">
            <button class="thumb" onclick="openStory('${f.id}')">
              <img src="/flyers/${f.id}.png" alt="Story ${escape(f.name)}" loading="lazy">
            </button>
            <div class="info">
              <small>${DATA.variants[f.variant - 1]}</small>
              <b>${escape(f.name)}</b>
              <p>${escape(f.summary)}</p>
              <div>
                <button onclick="copy('${escape(project.url)}',this)">Copiar link</button>
                <a href="/flyers/${f.id}.png" download>Descargar PNG</a>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `).join('');

  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Flyers Stories · NaniLabs</title>
  <style>${galleryCss}</style>
</head>
<body>
  <main>
    <nav>
      <a href="/">N<span>NaniLabs</span></a>
      <a href="/">← Volver al inicio</a>
    </nav>
    <section class="hero">
      <div>
        <small>KIT DE PUBLICACIÓN · INSTAGRAM</small>
        <h1>Quince stories.<br><span>Cinco proyectos.</span></h1>
        <p>Elegí una pieza, copiá su enlace y pegalo en el sticker de Instagram.</p>
      </div>
      <a class="zip" href="/flyers/flyers_nanilabs.zip" download>↓ Descargar paquete completo <small>15 PNG · ZIP</small></a>
    </section>
    <div class="filters">
      <div>
        <button class="active" data-project="all">Todos · 15</button>
        ${DATA.projects.map(p => `<button data-project="${p.id}">${escape(p.name)}</button>`).join('')}
      </div>
      <select aria-label="Filtrar por variante">
        <option value="all">Todas las variantes</option>
        ${DATA.variants.map((v, i) => `<option value="${i + 1}">${v}</option>`).join('')}
      </select>
    </div>
    ${projectSections}
    <footer>
      <span>NaniLabs · Stories 1080 × 1920 px</span>
      <a href="https://nanilabs.lat">nanilabs.lat</a>
    </footer>
  </main>
  <div class="modal" hidden onclick="if(event.target===this)closeStory()">
    <button class="close" onclick="closeStory()">×</button>
    <button class="prev" onclick="step(-1)">←</button>
    <img>
    <button class="next" onclick="step(1)">→</button>
    <aside>
      <small></small>
      <h2></h2>
      <p></p>
      <button class="copylink">Copiar link del sticker</button>
      <a class="download">Descargar PNG</a>
    </aside>
  </div>
  <script>
    const data = ${JSON.stringify(DATA.flyers)};
    const projects = ${JSON.stringify(DATA.projects)};
    let at = 0;
    function copy(t, b) {
      navigator.clipboard.writeText(t).then(() => {
        let old = b.textContent;
        b.textContent = 'Copiado';
        setTimeout(() => b.textContent = old, 1500);
      });
    }
    document.querySelectorAll('.filters [data-project]').forEach(b => b.onclick = () => {
      document.querySelectorAll('.filters button').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      document.querySelectorAll('.group').forEach(g => g.hidden = b.dataset.project !== 'all' && g.dataset.project !== b.dataset.project);
    });
    document.querySelector('.filters select').onchange = e => {
      document.querySelectorAll('.card').forEach(c => c.hidden = e.target.value !== 'all' && c.dataset.variant !== e.target.value);
    };
    function openStory(id) {
      at = data.findIndex(f => f.id === id);
      showStory();
    }
    function showStory() {
      let f = data[at];
      let p = projects.find(x => x.id === f.project);
      let m = document.querySelector('.modal');
      m.hidden = false;
      m.querySelector('img').src = '/flyers/' + f.id + '.png';
      m.querySelector('small').textContent = ['01 · Panorama', '02 · Ficha técnica', '03 · Módulos'][f.variant - 1];
      m.querySelector('h2').textContent = f.name;
      m.querySelector('p').textContent = f.summary;
      m.querySelector('.copylink').onclick = e => copy(p.url, e.target);
      m.querySelector('.download').href = '/flyers/' + f.id + '.png';
      document.body.style.overflow = 'hidden';
    }
    function closeStory() {
      document.querySelector('.modal').hidden = true;
      document.body.style.overflow = '';
    }
    function step(d) {
      at = (at + d + data.length) % data.length;
      showStory();
    }
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeStory();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    });
  </script>
</body>
</html>`;
}

const galleryCss = `@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap');:root{color-scheme:dark;--bg:#090a0d;--surface:#12151b;--border:#27272a;--muted:#a1a1aa;--cyan:#06b6d4}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:#fafafa;font:15px 'Inter Tight',Arial,sans-serif;-webkit-font-smoothing:antialiased}h1,h2,nav a:first-child,.info b{font-family:'Space Grotesk',Arial,sans-serif}main{max-width:1190px;margin:auto;padding:0 24px}nav{height:70px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between}nav a{color:#a1a1aa;text-decoration:none}nav a:first-child{display:flex;align-items:center;gap:10px;color:#fafafa;font-weight:bold}nav a:first-child:before{content:'N';display:grid;place-items:center;background:var(--cyan);color:#071116;width:29px;height:29px;border-radius:8px}.hero{padding:58px 0 50px;border-bottom:1px solid var(--border);display:flex;align-items:flex-end;justify-content:space-between}.hero small,.hero>div>small{color:var(--cyan);font-size:12px;letter-spacing:.07em}.hero h1{font-size:58px;letter-spacing:-2.8px;line-height:1.02;margin:16px 0}.hero h1 span{color:#777f8c}.hero p{color:var(--muted)}.zip{display:flex;flex-direction:column;gap:8px;background:var(--cyan);color:#061216;text-decoration:none;font-weight:bold;border-radius:7px;padding:14px 17px}.zip small{color:#15505b}.filters{display:flex;justify-content:space-between;align-items:center;gap:15px;padding:20px 0;border-bottom:1px solid var(--border)}.filters>div{display:flex;gap:6px;overflow:auto}.filters button,.links button,.info button{border:1px solid #30343b;background:#12151b;color:#c7c9ce;border-radius:5px;padding:9px 12px;white-space:nowrap;cursor:pointer}.filters button.active{color:#fff;border-color:#49616a;background:#182129}.filters select{background:var(--surface);color:#eee;border:1px solid var(--border);border-radius:5px;padding:9px}.group{padding:30px 0;border-bottom:1px solid var(--border)}.group>header{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:18px}.group>header p,.group>header span{margin:0;color:var(--muted);font-size:13px}.group>header h2{font-size:23px;margin:5px 0}.links{display:flex;gap:8px;align-items:center}.links a{font-size:13px;color:#8fdceb;text-decoration:none}.grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}.card{background:#101318;border:1px solid #272b32;border-radius:8px;overflow:hidden}.thumb{width:100%;aspect-ratio:9/16;background:#090a0d;border:0;padding:0;cursor:zoom-in}.thumb img{width:100%;height:100%;display:block;object-fit:cover}.info{padding:13px}.info small{display:block;color:#80d5e3;font-size:11px}.info b{display:block;margin:8px 0 4px}.info p{min-height:32px;margin:0;color:var(--muted);font-size:12px;line-height:1.4}.info>div{display:flex;justify-content:space-between;align-items:center;margin-top:12px}.info button,.info a{color:#ddd;text-decoration:none;font-size:12px}.info a{padding:10px}.group[hidden],.card[hidden]{display:none}footer{display:flex;justify-content:space-between;padding:25px 0;color:#71717a;font-size:12px}footer a{color:inherit;text-decoration:none}.modal{position:fixed;inset:0;background:#050609f5;z-index:5;display:flex;justify-content:center;align-items:center;gap:25px;padding:50px}.modal[hidden]{display:none}.modal>img{height:90vh;max-width:60vw;object-fit:contain}.modal aside{width:260px}.modal aside small{color:var(--cyan)}.modal aside p{color:var(--muted);line-height:1.5}.modal aside button,.modal aside a{display:block;width:100%;padding:13px;margin-top:9px;text-align:center;border:1px solid var(--border);border-radius:5px;background:#12151b;color:white;text-decoration:none;cursor:pointer}.modal aside .copylink{background:var(--cyan);color:#071116;border-color:var(--cyan)}.close,.prev,.next{position:absolute;top:20px;padding:10px 15px;background:#15191f;border:1px solid #343941;border-radius:6px;color:white;cursor:pointer}.close{right:25px;font-size:22px}.prev,.next{top:50%;font-size:20px}.prev{left:20px}.next{right:20px}@media(max-width:760px){main{padding:0 15px}.hero{align-items:flex-start;flex-direction:column;gap:20px;padding:39px 0}.hero h1{font-size:46px}.filters{align-items:stretch;flex-direction:column}.filters>div{width:calc(100vw - 30px)}.group>header{align-items:flex-start;flex-direction:column}.grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}.info{padding:9px}.info>div{gap:4px}.info button,.info a{padding:8px 4px;font-size:11px}.modal{padding:54px 14px 20px;display:grid;grid-template-columns:1fr;grid-template-rows:minmax(0,1fr) auto;justify-items:center;gap:10px}.modal>img{height:100%;max-height:65vh;max-width:80vw}.modal aside{width:min(100%,400px);display:grid;grid-template-columns:1fr 1fr;gap:7px}.modal aside small,.modal aside h2,.modal aside p{grid-column:1/-1}.modal aside h2{margin:0}.modal aside p{display:none}.modal aside button,.modal aside a{margin:0;font-size:12px}.prev,.next{top:35%;padding:8px}.prev{left:5px}.next{right:5px}}`;

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), renderGallery(), 'utf8');
  if (process.argv.includes('--gallery-only')) return;

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'nanilabs-flyers-'));
  const edgeCandidates = [
    process.env.EDGE_PATH,
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
  ].filter(Boolean);
  const edge = edgeCandidates.find(file => fs.existsSync(file));

  if (!edge) {
    console.warn('[Flyers] Microsoft Edge no encontrado. Se escribió index.html; PNG pendientes.');
  } else {
    for (const [i, flyer] of DATA.flyers.entries()) {
      const htmlPath = path.join(tempDir, `${flyer.id}.html`);
      const pngPath = path.join(tempDir, `${flyer.id}.png`);
      fs.writeFileSync(htmlPath, renderFlyer(flyer), 'utf8');
      try {
        execFileSync(edge, [
          '--headless=new',
          '--disable-gpu',
          '--no-sandbox',
          '--hide-scrollbars',
          '--force-device-scale-factor=1',
          '--window-size=1080,1920',
          `--screenshot=${pngPath}`,
          `file:///${htmlPath.replace(/\\/g, '/')}`
        ], { stdio: 'ignore', timeout: 30000 });
        if (fs.existsSync(pngPath)) {
          fs.copyFileSync(pngPath, path.join(OUTPUT_DIR, `${flyer.id}.png`));
        } else {
          throw new Error('Edge terminó sin crear el PNG');
        }
        console.log(`[Flyers] ${i + 1}/${DATA.flyers.length} ${flyer.id}`);
      } catch (error) {
        console.warn(`[Flyers] No se pudo renderizar ${flyer.id}: ${error.message}`);
      }
    }
  }

  fs.rmSync(tempDir, { recursive: true, force: true });

  try {
    const zipPath = path.join(OUTPUT_DIR, 'flyers_nanilabs.zip');
    const pngs = DATA.flyers.map(f => path.join(OUTPUT_DIR, `${f.id}.png`)).filter(file => fs.existsSync(file));
    if (pngs.length === DATA.flyers.length) {
      execFileSync('powershell.exe', [
        '-NoProfile',
        '-Command',
        `Compress-Archive -LiteralPath '${pngs.join("','")}' -DestinationPath '${zipPath}' -Force`
      ], { stdio: 'ignore' });
    }
  } catch (error) {
    console.warn(`[Flyers] No se pudo actualizar el ZIP: ${error.message}`);
  }
  console.log('[Flyers] Catálogo y PNGs generados en public/flyers');
}

main().catch(error => {
  console.error('[Flyers] Error:', error.message);
  process.exitCode = 1;
});
