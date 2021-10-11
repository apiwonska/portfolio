module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    React: true,
    expect: true,
    JSX: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'jest', 'import'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'prettier',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'warn',
    'no-unused-vars': 'warn',
    'arrow-body-style': 'warn',
    'no-console': 'warn',
    'import/prefer-default-export': 'off',
    'prettier/prettier': [
      'warn',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 80,
      },
    ],
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: true,
      },
    ],
    // rules for Typescript
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],

    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    // rules for jest
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': ['warn'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'react/prop-types': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
      },
    },
    {
      files: ['**/*.test.tsx'],
      rules: {
        'react/no-children-prop': 'off', // render method allows only self closing tags
      },
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      rules: { '@typescript-eslint/no-var-requires': 'off' },
    },
  ],
  settings: {
    // for absolute import configuration
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
      },
      // for typescript
      typescript: {},
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: 'packages/*/tsconfig.json',
        },
      },
    },
  },
};
