# React + Vite

## Deploying to GitHub Pages

This repository is configured to build and deploy the portfolio to GitHub Pages
whenever changes are pushed to `main`.

1. Push the project files to the `main` branch of `Samiksha201104/Art-Portfolio`.
2. In the repository, open **Settings → Pages** and select **GitHub Actions** as
   the build and deployment source.
3. Open the **Actions** tab and wait for the “Deploy portfolio to GitHub Pages”
   workflow to finish.

The published site will be available at
`https://samiksha201104.github.io/Art-Portfolio/`. Client-side routes use hash
URLs (for example, `/#/about`) so they work when refreshed on GitHub Pages.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
