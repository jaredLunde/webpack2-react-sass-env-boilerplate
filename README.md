# webpack2-react-sass-env-boilerplate
## A boilerplate for creating applications with Webpack 2.2, Babel w/ babel-preset-env, React and SASS.

This package includes everything you need to start building an application with
Webpack 2, React and SASS.


### package.json
Here you'll find a list of devDependencies for creating this type of
application, however, they are listed under 'dependencies' since I use this
project as a grouped devDependency in my personal projects.


### package.json.tpl
Here is an example of what your package.json might look like, were you to
use this package as a devDependency. Should you choose to do so, you can
install this package with the command:

`npm install --save-dev webpack2-react-sass-env-boilerplate`


### server.js
Using the command `NODE_ENV=development && node server.js` will start your
application with hot module reloading on port `:3000` of your localhost, using
the webpack configuration at `webpack.config.dev.js` and the index file at
`index.html`.


### webpack.config.dev.js
This is an example of a basic development webpack configuration file for this
type of application.


### webpack.config.js
This is an example of a basic distribution webpack configuration file for this
type of application. Commented out are examples of implementing Modernizr and
http2 aggressive code splitting.


### .babelrc
This is an example of a basic Babel 6 configuration utilizing babel-preset-env.


### /lib
This is where example index files for both hot reloading (`index.hot.js`) and
distribution builds (`index.js`) are located, as well as the 'Hello world'
React component (`App.js`).


### /assets
Development Javascript files are output to this folder from
`webpack.config.dev.js` and static assets such as images and SASS can be
placed in here.
