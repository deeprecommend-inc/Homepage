const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
    const config = await createExpoWebpackConfigAsync({
        ...env,
        babel: {
            dangerouslyAddModulePathsToTranspile: ['@ui-kitten/components']
        },
        output: {
          path: __dirname + '/app/assets/javascripts',
          filename: 'bundle.js',
          resolve: {
            extensions: ['', '.js', '.jsx']
          },
          module: {
            loaders: [
              {
                test: /\.js?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                  cacheDirectory: true,
                  presets: ['react', 'es2015']
                }
              }
            ]
          }
        }
    }, argv);
    return config;
};
