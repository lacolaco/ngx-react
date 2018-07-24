const { BrowserBuilder } = require('@angular-devkit/build-angular');
const webpackMerge = require('webpack-merge');

class NgxReactBuilder extends BrowserBuilder {
  buildWebpackConfig(root, projectRoot, host, options) {
    const config = super.buildWebpackConfig(root, projectRoot, host, options);

    return webpackMerge([
      config,
      // TSX compilation
      {
        module: {
          rules: [
            {
              test: /\.tsx$/,
              use: 'ts-loader'
            }
          ]
        },
        resolve: {
          extensions: ['.tsx']
        }
      }
    ]);
  }
}

exports.default = NgxReactBuilder;
