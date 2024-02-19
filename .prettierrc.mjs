/** @type {import("prettier").Config} */
export default {
    plugins: ['prettier-plugin-astro'],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:astro/recommended"
    ],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
        {
            "files": ["*.ts", "*.tsx", "*.js", "*.jsx"],
            "rules": {
                "prettier/prettier": ["warn", { "endOfLine": "auto" }],
                "@typescript-eslint/explicit-member-accessibility": "off",
                "@typescript-eslint/no-explicit-any": "warn",
                "@typescript-eslint/no-unused-vars": "warn"
            }
        },
        {
            "files": ["*.spec.ts", "*.spec.tsx", "*.spec.js", "*.spec.jsx"],
            "env": {
                "jest": true
            },
            "rules": {}
        }
    ],
  };