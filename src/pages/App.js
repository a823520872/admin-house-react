import { connect } from 'react-redux'
import { createBrowserHistory } from 'history'
import { Router, Route } from 'react-router-dom'
import React, { Component } from 'react'

import Login from './Login/index'

import '../style/App.css'

const browserHistory = createBrowserHistory()

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={this.props.userinfo ? Home : Login} />
            </Router>
        )
    }
}

const mapStateToProps = state => ({
    userinfo: state.userinfo
})

export default connect(mapStateToProps)(App)
