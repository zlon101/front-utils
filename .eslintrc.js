module.exports = {
  root: true,
  // 运行环境, 不同环境有对应的预定义全局变量
  env: {
    node: true,
    browser: false,
    commonjs: false,
    es6: true
  },
  // 继承基础配置(已有的规则集) [airbnb-base | eslint:recommended]
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  // extends: [
  //   'plugin:vue/essential',
  //   'plugin:prettier/recommended',
  //   'prettier'
  //   // '@vue/standard'
  // ],
  plugins: ['vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 使用prettier来替换eslint的规则
    // 'prettier/prettier': 'error',
    'no-var': 2, // 禁用var
    'no-unused-vars': [2, { args: 'none' }], // 消除未使用的变量  不检查函数的参数
    'no-redeclare': 2, // 禁止多次声明同一变量
    'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复
    eqeqeq: ['error', 'always', { null: 'ignore' }] // 强制使用全等
  },
  parserOptions: {
    // parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module'
  },
  // 配置全局变量
  globals: {
    var1: 'writable',
    var2: 'readonly'
  }
};
