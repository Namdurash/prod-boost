module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:prettier/recommended',
  ],
  rules: {
    'max-len': [
      'warn',
      {
        code: 120,
        ignoreUrls: true,
        ignoreStrings: false,
        ignoreTemplateLiterals: false,
        ignoreComments: false,
      },
    ],
  },
};
