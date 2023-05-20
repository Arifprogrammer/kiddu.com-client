module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/prop-types": 0,
    "no-undef": 0,
    "react-hooks/exhaustive-deps": 0,
    "react-refresh/only-export-components": "warn",
    "react/no-unescaped-entities": 0,
  },
};
