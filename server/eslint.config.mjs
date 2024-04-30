import globals from "globals";
import pluginVue from "eslint-plugin-vue";


export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  ...pluginVue.configs["flat/essential"],
];