const { DevServerBuilder } = require('@angular-devkit/build-angular');
const NgxReactBuilder = require('../build').default;

class NgxReactDevServerBuilder extends DevServerBuilder {
  buildWebpackConfig(root, projectRoot, host, browserOptions) {
    const browserBuilder = new NgxReactBuilder(this.context);
    return browserBuilder.buildWebpackConfig(
      root,
      projectRoot,
      host,
      browserOptions
    );
  }
}

exports.default = NgxReactDevServerBuilder;
