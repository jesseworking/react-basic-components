const path = require('path');
const babelConfig = require('./babel.config.js');

const createWebpackConfig = (component, buildPath, options = {}) => ({
  mode: 'production',
  name: component,
  entry: path.join(__dirname, `../src/components/${component}/index.tsx`),
  output: {
    path: component !== 'index' ? path.join(buildPath, component) : buildPath,
    filename: `index.js`,
    library: '',
    libraryExport: 'default',
    libraryTarget: 'commonjs2'
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'styled-components': 'styled-components'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
        query: {
          declaration: true,
          declarationDir: buildPath
        }
      },
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: babelConfig
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        use: ['file-loader']
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: '[name]_[hash]'
            }
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeTitle: true },
                { convertColors: { shorthex: false } },
                { convertPathData: false }
              ]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx']
  },
  ...options
});

module.exports = createWebpackConfig;
