module.exports = {
  extends: '../../.eslintrc.js',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'], // 指向本地 tsconfig
  },
};