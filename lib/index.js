// css imports
require('../assets/css/{{PKG_NAME}}/core.scss')


// js
import "babel-polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


const root = document.getElementById('{{PKG_NAME}}')


ReactDOM.render(<App/>, root)
