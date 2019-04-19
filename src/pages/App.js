import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import '../style/App.css'
import { createBrowserHistory } from 'history'
import Login from './login/index'

const browserHistory = createBrowserHistory()

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                {/* {this.props.userinfo ? <Route path="/" component={Home} /> :  */}
                <Route path="/" component={Login} />
                {/* } */}
            </Router>
        )
    }
}

const mapStateToProps = state => ({
    userinfo: state.userinfo
})

export default connect(mapStateToProps)(App)
