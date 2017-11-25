module.exports = {
  // parser: 'sugarss',
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      browsers: 'last 2 versions',
      warnForDuplicates: true,
      features: {
        autoprefixer: {
          remove: false
        }
      }
    },
    'precss': {},
    'postcss-sorting': {},
    'postcss-utilities': {},
    'postcss-short': {},

    'postcss-assets': {},
    'postcss-sprites': {},
    'postcss-font-magician': {},
    'postcss-inline-svg': {},
    'postcss-write-svg': {},

    'postcss-reporter': {},
    'postcss-browser-reporter': {},

    'rucksack-css': {},

    'react-css-modules': {},
    // 'cssnano': {},
  }
}
