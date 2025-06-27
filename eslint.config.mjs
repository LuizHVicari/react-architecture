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
      "src/presentation/components/ui/**",
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
      // 1. React moderno não exige React no escopo do JSX
      "react/react-in-jsx-scope": "off",
    
      // 2. Desliga a regra JS padrão de variáveis não usadas
      "no-unused-vars": "off",
    
      // 3. Substitui com uma versão mais customizável do @typescript-eslint
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: false,
          args: "after-used",
        },
      ],
    
      // 4. Aviso para imports não utilizados (plugin `eslint-plugin-unused-imports`)
      "unused-imports/no-unused-imports": "warn",
    
      // 5. React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    
      // 🧠 ADICIONADOS AQUI:
    
      // ✔️ Exige tipagem explícita nas funções, exceto arrow functions e React components
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowExpressions: true, // arrow function está liberada
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true, // HOCs liberados
          allowDirectConstAssertionInArrowFunctions: true,
          allowConciseArrowFunctionExpressionsStartingWithVoid: true,
        },
      ],
    
      // ⚠️ `any` explícito vira warning
      "@typescript-eslint/no-explicit-any": "warn",
    
      // 🔤 Ordenação das props nos componentes React
      "react/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          shorthandFirst: true,
          noSortAlphabetically: false, // true = alfabética pura
          reservedFirst: true,
        },
      ],
    
      // Opcional: warning para arquivos que não seguem Prettier
      "prettier/prettier": "warn",
    },
    
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
