import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      react: pluginReact
    },
    settings: {
      react: {
        version: "19.1.0"
      }
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    }
  },
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      "apps/*/dist/**",
      "apps/*/node_modules/**",
      "packages/*/dist/**",
      "packages/*/node_modules/**",
      ".next/**",
      "coverage/**",
      "*.config.js",
      "*.config.ts",
      "*.config.mjs",
      ".prettierrc.js",
      ".prettierrc",
      "vite.config.ts",
      "postcss.config.js",
      "tailwind.config.js",
      "jest.config.js",
      "cypress.config.js",
      "playwright.config.js",
      "**/*.d.ts",
      "**/generated/**",
      "**/__tests__/**/*.test.{js,ts,jsx,tsx}",
      "**/__mocks__/**",
      "**/.git/**",
      "**/.vscode/**",
      "**/.idea/**",
      "**/logs/**",
      "**/tmp/**",
      "**/temp/**"
    ]
  }
]);
