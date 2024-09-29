const { type } = require('os');
const path = require('path');

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: 'takhti.js',
        path: path.relative(__dirname, 'dist'),
        globalObject: 'this',
        library: {
            name: 'takhti',
            type: 'umd'
        }
    },
    module: {
        rules: [
            {
                test: /\.[jt]s$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-typescript']
                    },
                },
            },
        ],
        resolve: {
            extensions: ['.ts', '.js'],
        },
    },
};