/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  semi: false,
  singleQuote: false,
  trailingComma: "all",
  tabWidth: 2,
  printWidth: 120,
  astroAllowShorthand: true,
  endOfLine: "lf",
}
