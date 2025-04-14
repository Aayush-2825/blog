import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Disable unused vars globally
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',  // Disable unused vars check globally
      '@typescript-eslint/no-require-imports': 'off',  // Optional, disable require() imports check
    },
  },
];

export default eslintConfig;
