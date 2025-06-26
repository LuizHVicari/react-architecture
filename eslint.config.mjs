import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import tsEslint from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import js from "@eslint/js/src/index.js";
import globals from "globals";

// Globals mais comuns para "browser" e "es2021"
const browserGlobals = {
  window: "readonly",
  document: "readonly",
  console: "readonly",
  React: "readonly", // <-- importante para React 17+ JSX Transform
};

const es2021Globals = {
  Atomics: "readonly",
  SharedArrayBuffer: "readonly",
  // mais globals de ES2021 aqui, se precisar
};

export default [
  {
    ignores: [
      "vite.config.ts",
      "dist/**",
      "build/**",
      "node_modules/**",
      "**/routeTree.gen.ts",
      "src/components/ui/**",
      "vite.config.ts"
    ],
  },
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...browserGlobals,
        ...es2021Globals,
        // opcionalmente, pode incluir globals do pacote 'globals'
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      "@typescript-eslint": tsEslint,
      prettier: prettierPlugin,
      import: importPlugin,
      "unused-imports": unusedImports,
    },
    rules: {
      // Desliga essa regra porque com React 17+ não precisa importar React em JSX
      "react/react-in-jsx-scope": "off",

      // Desliga a regra JS básica para evitar conflitos
      "no-unused-vars": "off",

      // Ajusta warnings de variáveis não usadas, ignora as que começam com "_"
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: false,
          args: "after-used",
        },
      ],

      "unused-imports/no-unused-imports": "warn",

      // React Hooks rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Coloque aqui suas outras regras personalizadas...
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
