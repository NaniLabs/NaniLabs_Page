# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## DoubleLink Release Note (Beta 2.3.2)

- **Project:** DoubleLink
- **Version:** Beta 2.3.2
- **Catalog Status:** Catálogo actualizado a Beta 2.3.2 (`version`: `2.3.2`, `status`: `Beta 2.3.2`) en `src/data/projects.json`.
- **Public Manifest & R2 State:** Manifiesto público en Cloudflare R2 (`https://pub-e7f8fb195c3c42b59e5da4c5c345837b.r2.dev/releases.json`) actualizado y activo en v2.3.2.
- **Scope & Features:** Suite de control remoto LAN, companion bidireccional Android ↔ Windows, portapapeles íntegro hasta 1 MiB con verificación SHA-256, Wake-on-LAN deduplicado con scheduler persistente, Edge Panel con estado reactivo y confirmación de apagado en dos toques, feedback de volumen sin encolamiento y nueva arquitectura UX en 5 destinos canónicos.
