import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './pages/App'
import reducer from './redux/reducers'
import 'antd/dist/antd.css'
import './style/index.css'

console.log(123);
const store = createStore(reducer)
console.log(213);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
