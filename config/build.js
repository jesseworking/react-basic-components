/* eslint-disable no-console */

const path = require('path');
const webpack = require('webpack');

const getDirectories = require('./utils/getDirectories');
const createIndexFile = require('./utils/createIndexFile');
const parseComponent = require('./utils/parseComponent');

const createWebpackConfig = require('./createWebpackConfig.js');

console.log(`Running builder.js`);

const buildPath = path.join(__dirname, '../core/');
const components = process.argv.slice(2).map(c => parseComponent(c));

/*
 * Create individual Webpack configuration for each component
 */

const allConfigs = components.map(component =>
  createWebpackConfig(component, buildPath)
);

/*
 * Create index.js entryfile and Webpack configuration for entire package
 */

const allComponents = getDirectories(
  path.join(__dirname, '../src/components')
).filter(component => component && component !== 'types');

createIndexFile(allComponents, path.join(__dirname, '../src/components'));

const indexConfig = createWebpackConfig('index', buildPath, {
  entry: path.join(__dirname, `../src/components/index.js`)
});

allConfigs.push(indexConfig);

/*
 * Multi-compile webpack bundles
 * See: https://webpack.js.org/api/node/#multicompiler
 */

const runWebpack = (i = 0, allErrs = [], allStats = []) => {
  process.stdin.resume();

  if (allConfigs[i]) {
    console.log(`Running webpack for config ${i + 1} of ${allConfigs.length}`);
    webpack(allConfigs[i], (err, stats) =>
      runWebpack(
        i + 1,
        allErrs.concat(err),
        allStats.concat(
          stats.toString({
            all: false,
            assets: true,
            colors: true,
            errors: true
          })
        )
      )
    );
  } else {
    allErrs.forEach(err => {
      if (err) throw err;
    });

    allStats.forEach(stats => console.log(stats));

    process.exit();
  }
};

runWebpack();
