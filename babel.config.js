module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '10',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-optional-chaining'],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
  ],
};
