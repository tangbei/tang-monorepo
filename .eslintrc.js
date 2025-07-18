module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  // parserOptions: {
  //   tsconfigRootDir: __dirname,
  //   project: ['./tsconfig.base.json'],
  // },
  rules: {
    // 你的自定义规则
  },
};