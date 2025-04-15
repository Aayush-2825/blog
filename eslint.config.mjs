import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // 1. Ignore generated files like Prisma Client
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "src/prisma/generated/**", // Adjust to where your Prisma client is
    ],
  },

  // 2. Add standard Next.js + TS config
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // 3. Optional: Loosen rules for generated files instead of ignoring them completely
  {
    files: ["src/prisma/generated/**/*"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unnecessary-type-constraint": "off",
      "@typescript-eslint/no-wrapper-object-types": "off",
    },
  },
];

export default eslintConfig;
