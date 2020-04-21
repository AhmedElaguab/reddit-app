import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Root from './Root'
import configureStore from './configureStore'

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Root store={store} />
  </React.StrictMode>,
  document.getElementById('root'),
)
