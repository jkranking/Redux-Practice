import 'babel-polyfill' // babel doesn't take care of all code out of the box
import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import { Router, browserHistory } from 'react-router' // gives us nice clean urls 
import routes from './routes'
import './styles/styles.css' // webpack can import css files
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const store = configureStore()

render(
	<Provider store={store}>
  	<Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
)