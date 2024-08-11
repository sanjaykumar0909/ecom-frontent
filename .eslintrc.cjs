module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prefer-const': 'off',
    'no-unused-vars': 'off',
    "@typescript-eslint/no-unused-vars":"off",
    "no-empty": "warn",
    '@typescript-eslint/ban-ts-comment': ['error', {
      'ts-ignore': false,
      'ts-expect-error': false,
      'ts-nocheck': false,
    }],
  },
}
