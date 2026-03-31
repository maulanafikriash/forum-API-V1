import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import vitest from "@vitest/eslint-plugin";

export default defineConfig([
  {
    ignores: ["coverage"],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { 
      globals: {
        ...globals.node,
        ...globals.browser,
      }, 
    },
  },
  {
    files: ["**/*.test.js"],
    plugins: { vitest },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...vitest.environments.env.globals,
      },
    },
  },
]);
