/** 规则说明
 *    https://eslint.bootcss.com/docs/rules/
 *    https://eslint.bootcss.com/docs/rules/
 */

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'warn', // 禁止未使用的变量
    'no-multiple-empty-lines':["error", { "max": 4, "maxEOF": 1 ,'maxBOF':2}], // 最大空行
    'no-trailing-spaces': ["error", { "ignoreComments": true }], // 允许注释块中的尾随空格
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
