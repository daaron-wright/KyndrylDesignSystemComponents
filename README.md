# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Development Environment Setup

### Prerequisites
- **Node.js** 18+ and **npm** 9+ (or yarn/pnpm)
- **Git** for version control

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/daaron-wright/KyndrylDesignSystemComponents.git
   cd KyndrylDesignSystemComponents
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the dev server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173/` with hot module reloading (HMR).

### Available Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Build TypeScript and Vite production bundle to `dist/`
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint checks
- `npm run test` — Run Vitest test suite
- `npm run test:watch` — Run tests in watch mode
- `npm run storybook` — Start Storybook dev server at `http://localhost:6006/`
- `npm run build-storybook` — Build static Storybook for deployment

### Storybook

This project uses Storybook for component documentation and development.

**Local Storybook:**
```bash
npm run storybook
```
Visit `http://localhost:6006/` to browse and test components interactively.

**Deployed Storybook (GitHub Pages):**
The Storybook is automatically deployed to GitHub Pages on every push to `main`:
- URL: `https://daaron-wright.github.io/KyndrylDesignSystemComponents/`

---

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```



## Consuming components in microsites - Once published (or via local npm link)
```js
import { Button } from 'component-library';
// Note: CSS Modules are bundled with the component. If CSS needs to be imported separately,
// the import path will depend on your build configuration and how CSS is exported.
