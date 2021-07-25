import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import { Provider } from 'react-redux'
import configureStore from './store'
import PrimarySearchAppBar from './components/Header'
const store = configureStore()

ReactDOM.render(
  <Provider store={{ ...store }}>
    <PrimarySearchAppBar />
    <Routes />
  </Provider>,
  document.getElementById('root'),
)
