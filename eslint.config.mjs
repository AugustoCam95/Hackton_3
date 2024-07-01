import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      "react/react-in-jsx-scope": "off", // Disable the rule for React in JSX scope
    },
  },
  pluginJs.configs.recommended,
  pluginReactConfig,
];
