module.exports = {
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:astro/recommended',
  ],
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Enable this plugin
      plugins: ['astro'],
      env: {
        // Enables global variables available in Astro components.
        node: true,
        'astro/astro': true,
        es2020: true,
      },
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        // The script of Astro components uses ESM.
        sourceType: 'module',
      },
      rules: {
        // Enable recommended rules
        'astro/no-conflict-set-directives': 'error',
        'astro/no-unused-define-vars-in-style': 'error',

        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx', '*.mjs', '*.cjs'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
      plugins: ['react', 'react-hooks', '@typescript-eslint'],
      rules: {
        'react/prop-types': ['off'],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [
          'error',
          {
            extensions: ['.jsx', '.tsx'],
          },
        ],
        'react/jsx-props-no-spreading': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'import/order': ['error'],
        'no-param-reassign': 'off',
      },
    },
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        extraFileExtensions: ['.svelte'],
        sourceType: 'module',
      },
      settings: {
        'svelte3/typescript': require('typescript'),
      },
      plugins: ['@typescript-eslint', 'svelte3'],
    },
  ],
  rules: {
    'import/no-unresolved': 'off',
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        quoteProps: 'as-needed',
        trailingComma: 'all',
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    ],
  },
};
