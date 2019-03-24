module.exports = {
  presets: [
    [
      '@vue/app',
      {
        useBuiltIns: 'entry',
        coreJs: 3,
        polyfills: [
          'es6.array.iterator',
          'es6.promise',
          'es6.object.assign',
          'es7.promise.finally',
        ],
      },
    ],
  ],
};
