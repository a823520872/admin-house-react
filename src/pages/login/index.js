import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { setUserInfo, setToken } from '../../redux/actions/common'
import api from '../../api/index'
import Login from './login'

class LoginContainer extends Component {
    state = {
        form: {
            account: '',
            password: ''
        }
    }
    handleInput = (e, key) => {
        this.setState({
            form: {
                ...this.state.form,
                [key]: e.target.value
            }
        })
    }
    handleSubmit = () => {
        api.user.login(this.state.form).then(res => {
            if (res && res.data && res.data.userinfo) {
                this.props.dispatch(setToken(res.data.userinfo.token))
                this.props.dispatch(setUserInfo(res.data.userinfo))
                this.props.history.replace('/')
            }
        })
    }
    render() {
        return <Login handleInput={this.handleInput} handleSubmit={this.handleSubmit} />
    }
}

const mapStateToProps = (state, ownProps) => ({
    loading: state.loading
})

export default withRouter(connect(mapStateToProps)(LoginContainer))
