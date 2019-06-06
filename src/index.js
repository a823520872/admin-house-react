import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'

import 'antd/dist/antd.css'

import App from './pages/App'
import reducer from './redux/reducers'

import './style/index.css'

const store = createStore(reducer)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
