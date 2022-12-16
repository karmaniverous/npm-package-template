const { version } = require('./package.json');

process.env.NODE_PACKAGE_VERSION = version;

module.exports = (api) => {
  api.cache(true);

  return {
    presets: ['@babel/preset-env'],
    plugins: [
      '@babel/plugin-syntax-import-assertions',
      'lodash',
      ['module-extension', { mjs: '' }],
      [
        'transform-inline-environment-variables',
        {
          include: ['NODE_PACKAGE_VERSION'],
        },
      ],
    ],
  };
};
