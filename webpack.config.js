const path = require('path');

config = {
    entry: './src/app.js',
    output: {
       path: path.resolve(__dirname, 'dist'),
       filename: 'bundle.js',
    },
    module: {
      loaders: [
        {
           test: /\.js?$/,
           exclude: /node_modules/,
           loader: 'babel-loader',
           query: {
              presets: ['env', 'react']
           }
        },
        {
          // test: /\.scss$|\.css$/,
          // exclude: /node_modules/,
          // loader: 'style-loader!css-loader!sass-loader',
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
        }
      ]
    }

 }

 module.exports = config;