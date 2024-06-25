module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'generator-star-spacing': 'off',
    'prefer-const': 'off',
    'object-property-newline': 'off',
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-prototype-builtins': 'off'
  }
}
