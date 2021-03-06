import 'whatwg-fetch'
import { createBrowserHistory } from 'history'
import { createStore } from 'redux'
import { message } from 'antd'
import qs from 'querystring'

import { setLoading, setUserInfo } from '../redux/actions/common'
import reducer from '../redux/reducers'

let store = createStore(reducer)

const isPro = process.env.NODE_ENV === 'production'
const baseURL = isPro ? 'http://house.zhiqiang.ink' : ''

const browserHistory = createBrowserHistory()

function Ajax(url, params, cfg) {
    cfg = {
        ...{
            type: 'get'
        },
        ...cfg
    }
    const obj = {
        method: cfg.type,
        credentials: 'include',
        mode: 'cors'
    }
    let uri = baseURL + url
    const token = store.getState().token
    if (cfg.type === 'get') {
        uri += '?' + qs.stringify(params)
    } else if (cfg.type === 'post') {
        if (cfg.upload) {
            obj.body = params
        } else {
            obj.headers = {
                'Content-Type': 'application/json'
            }
            obj.body = JSON.stringify(params)
        }
    }
    obj.headers = obj.headers || {}
    if (token) {
        obj.headers.token = token
    }
    store.dispatch(setLoading(true))
    return new Promise((resolve, reject) => {
        fetch(uri, obj)
            .then(res => {
                store.dispatch(setLoading(false))
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error({
                        message: '网络异常'
                    })
                }
            })
            .then(
                res => {
                    console.log('请求成功', url, res)
                    if (res.code && res.code === 1) {
                        resolve(res)
                    } else {
                        if (res.code === 401) {
                            localStorage.clear()
                            sessionStorage.clear()
                            store.dispatch(setUserInfo(null))
                            browserHistory.replace('/')
                        }
                        message.warning(res.msg)
                        reject(res)
                    }
                },
                e => {
                    console.log(JSON.stringify(e))
                }
            )
    })
}

export default Ajax
