import 'babel-polyfill' // babel doesn't take care of all code out of the box
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router' // gives us nice clean urls 
import routes from './routes'
import './styles/styles.css'; // webpack can import css files
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);