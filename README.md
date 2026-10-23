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

## DoubleLink Release Note (Beta 3.4.1)

- **Project:** DoubleLink
- **Version:** Beta 3.4.1
- **Catalog Status:** Catálogo actualizado a Beta 3.4.1 (`version`: `3.4.1`, `status`: `Beta 3.4.1`) en `src/data/projects.json`.
- **Public Manifest & R2 State:** Manifiesto público en Cloudflare R2 (`https://pub-e7f8fb195c3c42b59e5da4c5c345837b.r2.dev/releases.json`) actualizado y activo en v3.4.1.
- **Changelog 3.4.1:** avisos del portapapeles compartido en español claro (nombre del dispositivo y motivo traducido, sin IDs técnicos), explicación guiada cuando Android no puede guardar el portapapeles por estar la app en segundo plano o cerrada, y mensajes unificados para tiempo agotado, éxito, sin dispositivos conectados, límite de 1 MB y errores de escritura en Windows.
- **Scope & Features:** Suite de control remoto LAN, companion bidireccional Android ↔ Windows, temporizador de audio con desvanecimiento del volumen maestro, Modos y Rutinas de Samsung, portapapeles de texto e imágenes hasta 1 MiB con verificación SHA-256, Wake-on-LAN y envío multi-archivo.
