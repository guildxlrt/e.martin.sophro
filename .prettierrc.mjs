/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",

        trailingComma: "es5",
        semi: false,
        singleQuote: false,
        useTabs: true,
        quoteProps: "consistent",
        bracketSpacing: true,
        arrowParens: "always",
        printWidth: 100,
        tabWidth: 4,
      },
    },
  ],
};
