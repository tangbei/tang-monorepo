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
    // ===== 基础代码质量规则 =====
    'no-console': 'warn', // 警告 console 使用
    'no-debugger': 'error', // 禁止 debugger
    'no-alert': 'warn', // 警告 alert 使用
    'no-var': 'error', // 禁止使用 var
    'prefer-const': 'error', // 优先使用 const
    'no-unused-vars': 'off', // 关闭基础规则，使用 TypeScript 版本
    '@typescript-eslint/no-unused-vars': ['error', { 
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_'
    }],
    
    // ===== TypeScript 特定规则 =====
    '@typescript-eslint/no-explicit-any': 'warn', // 警告使用 any
    '@typescript-eslint/explicit-function-return-type': 'off', // 不强制要求函数返回类型
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 不强制要求模块边界类型
    '@typescript-eslint/no-non-null-assertion': 'warn', // 警告使用 ! 断言
    '@typescript-eslint/prefer-nullish-coalescing': 'error', // 优先使用 ?? 而不是 ||
    '@typescript-eslint/prefer-optional-chain': 'error', // 优先使用可选链
    '@typescript-eslint/no-unnecessary-type-assertion': 'error', // 禁止不必要的类型断言
    
    // ===== 代码风格规则 =====
    'indent': ['error', 2], // 2 空格缩进
    'quotes': ['error', 'single'], // 单引号
    'semi': ['error', 'always'], // 必须分号
    'comma-dangle': ['error', 'es5'], // 尾随逗号
    'object-curly-spacing': ['error', 'always'], // 对象花括号内空格
    'array-bracket-spacing': ['error', 'never'], // 数组方括号内无空格
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],
    
    // ===== 逻辑规则 =====
    'no-duplicate-imports': 'error', // 禁止重复导入
    'no-multiple-empty-lines': ['error', { max: 2 }], // 最多 2 个空行
    'no-trailing-spaces': 'error', // 禁止尾随空格
    'eol-last': 'error', // 文件末尾换行
    'no-mixed-spaces-and-tabs': 'error', // 禁止混用空格和制表符
    
    // ===== 性能相关规则 =====
    'no-eval': 'error', // 禁止 eval
    'no-implied-eval': 'error', // 禁止隐式 eval
    'no-new-func': 'error', // 禁止 new Function
    
    // ===== 安全规则 =====
    'no-implied-eval': 'error', // 禁止隐式 eval
    'no-script-url': 'error', // 禁止 javascript: URL
    
    // ===== 最佳实践 =====
    'eqeqeq': ['error', 'always'], // 使用 === 和 !==
    'curly': ['error', 'all'], // 必须使用花括号
    'no-else-return': 'error', // 禁止 else 后直接 return
    'prefer-template': 'error', // 优先使用模板字符串
    'template-curly-spacing': ['error', 'never'], // 模板字符串内无空格
    
    // ===== 变量规则 =====
    'no-use-before-define': 'off', // 关闭基础规则
    '@typescript-eslint/no-use-before-define': ['error', { 
      functions: false,
      classes: false,
      variables: true
    }],
    
    // ===== 函数规则 =====
    'no-param-reassign': 'error', // 禁止修改参数
    'prefer-arrow-callback': 'error', // 优先使用箭头函数回调
    'arrow-spacing': 'error', // 箭头函数空格
    'no-confusing-arrow': 'error', // 禁止混淆的箭头函数
    
    // ===== 条件语句规则 =====
    'no-constant-condition': 'error', // 禁止常量条件
    'no-dupe-else-if': 'error', // 禁止重复的 else-if
    'no-dupe-keys': 'error', // 禁止重复的对象键
    
    // ===== 字符串规则 =====
    'no-useless-concat': 'error', // 禁止无用的字符串连接
    'prefer-regex-literals': 'error', // 优先使用正则字面量
  },
};