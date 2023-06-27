/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  pluginSearchDirs: false,
};

module.exports = config;
