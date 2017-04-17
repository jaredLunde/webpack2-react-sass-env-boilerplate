{
  "name": "{{PKG_NAME}}",
  "version": "0.1.0-alpha",
  "main": "es/index",
  "module": "es/index",
  "jsnext:main": "es/index",
  "private": true,
  "peerDependencies": {
    "react": ">=15.x",
    "react-dom": ">=15.x"
  },
  "devDependencies": {
    "webpack2-react-sass-env-boilerplate": "^0.2.0"
  },
  "repository": {
    "type": "git",
    "url": ""
  },
  "scripts": {
    "start": "cross-env NODE_ENV=development node server.js",
    "build": "npm run build:commonjs && npm run build:es && npm run build:dist",
    "build:commonjs": "rm -rf commonjs && cross-env NODE_ENV=cli babel ./src --out-dir commonjs",
    "build:es": "rm -rf es && cross-env NODE_ENV=production babel ./src --out-dir es",
    "build:dist": "rm -rf dist && cross-env NODE_ENV=production webpack --config webpack.config.js",
    "start:cli": "npm run node ./src/index.js",
    "node": "cross-env NODE_ENV=cli babel-node",
    "watch:commonjs": "cross-env NODE_ENV=cli babel ./src -w --out-dir commonjs",
    "watch:es": "cross-env NODE_ENV=es babel ./src -w --out-dir es",
    "prepublish": "npm run build",
    "analyze": "cross-env NODE_ENV=production webpack --config webpack.config.js -j | webpack-bundle-size-analyzer"
  },
  "analyze": true,
  "license": "MIT"
}
