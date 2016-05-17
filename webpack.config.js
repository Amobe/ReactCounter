var path = require('path')
var webpack = require('webpack')

var config = {
    entry: {
        app: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/index.js')],
        vendors: ['react', 'react-dom', 'react-redux', 'babel-polyfill'],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    resolve: {
        alias: {},
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    ],
    module: {
        noParse: [],
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                },
            },
        ],
    },
    addVendor: function(name, path) {
        this.resolve.alias[name] = path
        this.module.noParse.push(new RegExp('^' + name + '$'))
    },
}


// var bowerDir = 'bower_components';
// var modulesDir = 'node_modules';
// var libReactPath = path.resolve(__dirname, modulesDir + '/react/dist/react.min.js');
// var libReactDomPath = path.resolve(__dirname, modulesDir + '/react-dom/dist/react-dom.min.js');
// var libReactReduxPath = path.resolve(__dirname, modulesDir + '/react-redux/dist/react-redux.min.js');
// config.addVendor('react', libReactPath);
// config.addVendor('react-dom', libReactDomPath);
// config.addVendor('react-redux', libReactReduxPath);

module.exports = config
