{
  "name": "{{PKG_NAME}}",
  "version": "0.1.0-alpha",
  "main": "es/index",
  "module": "es/index",
  "private": true,
  "peerDependencies": {
    "react": ">=15.x",
    "react-dom": ">=15.x"
  },
  "devDependencies": {
    "webpack2-react-sass-env-boilerplate": "^0.1.8"
  },
  "repository": {
    "type": "git",
    "url": ""
  },
  "scripts": {
    "start": "cross-env NODE_ENV=development node server.js",
    "build": "npm run build:es5 && npm run build:es && npm run build:dist",
    "build:es5": "rm -rf es5 && cross-env NODE_ENV=cli babel ./lib --out-dir es5",
    "build:es": "rm -rf es && cross-env NODE_ENV=production babel ./lib --out-dir es",
    "build:dist": "rm -rf dist && cross-env NODE_ENV=production webpack --config webpack.config.js",
    "start:cli": "npm run node ./lib/index.js",
    "node": "cross-env NODE_ENV=cli babel-node",
    "watch:es5": "cross-env NODE_ENV=cli babel ./lib -w --out-dir es5",
    "watch:es": "cross-env NODE_ENV=es babel ./lib -w --out-dir es",
    "prepublish": "npm run build",
    "analyze": "cross-env NODE_ENV=production webpack --config webpack.config.js -j | webpack-bundle-size-analyzer"
  },
  "analyze": true,
  "license": "MIT"
}
