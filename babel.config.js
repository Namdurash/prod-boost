/** @type {import('react-native-worklets/plugin').PluginOptions} */
const workletsPluginOptions = {
  // Your custom options.
};

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['react-native-worklets/plugin', workletsPluginOptions],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@app': './src',
          '@components': './src/components',
          '@constants': './src/constants',
          '@assets': './assets',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@models': './src/models',
          '@stores': './src/stores',
        },
      },
    ],
  ],
};
