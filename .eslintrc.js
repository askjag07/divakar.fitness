module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:react-hooks/recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
