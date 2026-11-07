# UI/UX Redesign Brief — `nanilabs.lat` (`NaniLabs_Page`)

## 1. Propósito y Estado Actual
- **Qué es NaniLabs**: Estudio de software fundado por Ignacio Exequiel Meoniz en Entre Ríos, Argentina (`nanilabs.lat`).
- **Estado actual del repositorio**:
  - `src/pages/Home.tsx` y `src/index.css` ya cuentan con un escenario interactivo de los 6 productos, diagramas SVG animados (`Diagram`), sincronización en vivo de versión de DoubleLink (`useDoubleLinkVersion`) y una galería asimétrica filtrable por tecnología con `View Transitions API` y `Web Animations API`.
  - **Lo que falta perfeccionar en esta iteración definitiva**:
    1. **Modo Oscuro y Claro trabajados (Requisito Prioritario)**:
       - Priorizar un **modo oscuro atractivo y profundo** como identidad visual principal de NaniLabs (cuando el usuario no tenga preferencia guardada, usar el tema del sistema o modo oscuro por defecto), acompañado de un **modo claro** refinado (no blanco puro).
       - Selector de tema accesible y discreto en el header (`aria-label`, persistido en `localStorage` bajo `nanilabs-theme`, sincronizado con `document.documentElement.dataset.theme = 'dark' | 'light'`).
       - Script inline en `index.html` antes del render para evitar FOUC (parpadeo de tema incorrecto al cargar).
       - Adaptar superficies, atmósfera cromática de cada una de las 6 escenas en modo oscuro y en modo claro, bordes, tarjetas de la galería, logos y diagramas SVG.
    2. **Eliminar cualquier cliché o rigidez restante**:
       - Quitar numeraciones `01 / 06` decorativas innecesarias en los tabs y en la esquina del escenario; usar identificadores reales de categoría/plataforma (`Cloud / SaaS`, `LAN / Android + Win`, `Finanzas ML`, `Open Source Suite`, `Audio C++ / Qt6`, `Desktop / Python`) y micro-indicadores visuales.
       - Mejorar las animaciones e interactividad:
         - Reacción sutil al cursor (spotlight / inclinación o desplazamiento suave de capas en `.scene-inner` cuando `prefers-reduced-motion: no-preference`).
         - Transición coordinada con Web Animations API (`element.animate`) de texto, ventana de aplicación y nodos del diagrama SVG al cambiar de producto (clic o teclado).
         - Transición de tema suave y filtrado de galería con `document.startViewTransition` + fallback `card.animate`.
    3. **Consistencia de marca y favicon**:
       - Verificar que `index.html` y `NaniLabsMark` en `src/components/icons.tsx` sean 100% consistentes con `/favicon.svg` y `/logo.png`.

## 2. Productos Reales (Prohibido inventar datos)
1. **NaniLabs SaaS** (`https://saas.nanilabs.lat`): Sistemas comerciales multi-tenant. Stack: `Cloudflare Workers`, `D1`, `R2`, `Mercado Pago`. Imagen: `/projects/nanilabs-saas.png`. Links extra: `Demo gastronómica` (`https://food.nanilabs.lat`), `CRM Servicio Técnico` (`https://crm.saas.nanilabs.lat` — solo enlace externo).
2. **DoubleLink** (`https://doublelink.nanilabs.lat`): Android y Windows conectados por LAN. Stack: `Flutter`, `Dart`, `Kotlin`, `Win32`. Imagen: `/projects/doublelink.png`. Estado dinámico: `useDoubleLinkVersion()`. Link extra: `Manifiesto de versiones` (`https://pub-e7f8fb195c3c42b59e5da4c5c345837b.r2.dev/releases.json`).
3. **DoBre** (`https://dobre.nanilabs.lat`): Calculadora inversa para Mercado Libre Argentina. Stack: `Flutter`, `Dart`, `Web`, `Android`, `Windows`. Imagen: `/projects/dobre.png`. Link extra: `Repositorio` (`https://github.com/NaniLabs/DoBre`).
4. **FreeSoft** (`https://github.com/NaniLabs/FreeSoft`): Herramientas de escritorio de código abierto. Stack: `Open source`, `Windows`. Imagen: `/flyers/freesoft_01_editorial.png`.
5. **Aquamarine** (`https://github.com/NaniLabs/FreeSoft/releases/tag/Aquamarine`): Reproductor de música nativo. Stack: `C++`, `Qt6`, `Audio`. Imagen: `/projects/aquamarine.png`.
6. **OrganEyes** (`https://github.com/NaniLabs/FreeSoft/releases/tag/OrganEyes`): Organización automática de archivos para Windows. Stack: `Python`, `Tkinter`, `Windows`. Imagen: `/projects/organeyes.png`.

## 3. Reglas Técnicas y de Codificación
- **UTF-8 obligatorio en Windows**: Al escribir archivos desde Node o PowerShell, usar SIEMPRE UTF-8 sin BOM (`fs.writeFileSync(path, content, 'utf8')` o `[System.IO.File]::WriteAllText($path, $content, [System.Text.UTF8Encoding]::new($false))`). NUNCA usar `Set-Content` sin codificación UTF-8 para no corromper tildes ni símbolos (`•`, `↗`, `↑`, `·`).
- **Tests y Build**:
  - Actualizar `src/test/App.test.mjs` para cubrir el selector de tema oscuro/claro, persistencia, navegación por clic/teclado, filtro de tecnologías y `useDoubleLinkVersion()`.
  - Ejecutar `npm run lint`, `npm test` y `npm run build` sin errores ni warnings.
