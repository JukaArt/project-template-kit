import path from 'path'
import webpack from 'webpack'
import postcss from 'postcss'

// Use Future CSS, Today
import cssnext from 'postcss-cssnext'
const futureCss = [
  cssnext({
    browsers: 'last 2 versions',
    warnForDuplicates: false,
    features: {
      autoprefixer: {
        remove: false
      }
    }
  })
]

// Better CSS Readability
import precss from 'precss'
import sorting from 'postcss-sorting'
import utilities from 'postcss-utilities'
import short from 'postcss-short'
const readability = [
  precss,
  sorting,
  utilities,
  short
]

// Images and Fonts
import assets from 'postcss-assets'
import sprites from 'postcss-sprites'
import magician from 'postcss-font-magician'
import inlineSvg from 'postcss-inline-svg'
import whriteSvg from 'postcss-write-svg'
const imagesAndFonts = [
  assets({ loadPaths: ['src/images/']}),
  // sprites, // TODO
  magician,
  inlineSvg,
  whriteSvg
]

// Linters
import rules from 'stylelint-config-standard'
import stylelint from 'stylelint'
import stylefmt from 'stylefmt'
import doiuse from 'doiuse'
import colorguard from 'colorguard'
import reporter from 'postcss-reporter'
import browserReporter from 'postcss-browser-reporter'
import filterStream from 'postcss-filter-stream'

const linters = [
  reporter({
    clearMessages: true,
    throwError: true,
    formatter(input) {
      return input.source + ' produced ' + input.messages.length + ' messages'
    }
  }),
  browserReporter({
    selector: 'body:before'
  }),
  // doiuse,
  // stylefmt,
  // colorguard, // TODO
]

// Syntaxes
import sugarss from 'sugarss'
const syntaxes = [
  sugarss
]

// Other
import rucksack from 'rucksack-css'
import cssnano from 'cssnano'
import postcssImport from 'postcss-import'
const others = [
  rucksack,
  cssnano
]

// Solve Global CSS Problem
import use from 'postcss-use'
import modules from 'postcss-modules'
import reactModules from 'react-css-modules'
import autoreset from 'postcss-autoreset'
import initial from 'postcss-initial'
// import cqProlyfill from 'cq-prolyfill'
const globalProblsems = [ // TODO
  // use({
  //   modules: '*'
  // }),
  // modules,
  // reactModules,
  // autoreset,
  // initial,
  // cqProlyfill
]


const postcssArr = [
  ...futureCss,
  ...readability,
  ...imagesAndFonts,
  // ...syntaxes,
  ...others,
  ...globalProblsems,
  ...linters
]

export default [
  filterStream(
    '**/node_modules/**',
    stylelint({
      configFile: '.stylelintrc',
      context: path.join(__dirname, '../', 'src'),
      files: '**/*.s?(a|c)ss',
      failOnError: false
    })
  ),
  ...postcssArr
]
