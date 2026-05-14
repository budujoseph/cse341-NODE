const js = require('@eslint/js');
const importPlugin = require('eslint-plugin-import');
const globals = require('globals');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/default': 'error',
      'import/export': 'error',

      'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        require: 'readonly',
        module: 'readonly',
        console: 'readonly',
      },
    },
  },
  prettierConfig,
];
