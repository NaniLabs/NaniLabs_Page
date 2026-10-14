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

## DoubleLink Release Candidate Note (Beta 2.3.2)

- **Project:** DoubleLink
- **Candidate Version:** Beta 2.3.2 (local candidate preparation)
- **Catalog Status:** Local entry updated to Beta 2.3.2 (`version`: `2.3.2`, `status`: `Beta 2.3.2`) in `src/data/projects.json`.
- **Public Manifest & R2 State:** Current public release manifest on Cloudflare R2 (`https://pub-e7f8fb195c3c42b59e5da4c5c345837b.r2.dev/releases.json`) stays at 2.3.1 until authorized publish.
- **Scope & Features:** Retains real existing feature description (LAN hub, companion bidireccional Android ↔ Windows), URLs, assets, technologies, and releaseSource. No publication claim, physical QA success claim, or pending clipboard/WOL implementation claim.
- **Deployment & Approval:** Final deployment and site publishing are strictly prohibited until the user explicitly approves the completed release and R2 publication. Existing production deployment process and correct project naming are preserved.
