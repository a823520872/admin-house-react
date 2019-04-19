const token = sessionStorage.getItem('token')
const userinfo = sessionStorage.getItem('userinfo')
const menu = sessionStorage.getItem('menu')

const initState = {
    loading: false,
    token: token || null,
    userinfo: userinfo ? JSON.parse(userinfo) : null,
    menu: menu || '/'
}
export default (state = initState, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                ...{
                    loading: action.loading
                }
            }
        case 'SET_TOKEN':
            sessionStorage.setItem('token', action.token)
            return {
                ...state,
                ...{
                    token: action.token
                }
            }
        case 'SET_USERINFO':
            sessionStorage.setItem('userinfo', JSON.stringify(action.userinfo))
            return {
                ...state,
                ...{
                    userinfo: action.userinfo
                }
            }
        case 'SET_MENU':
            sessionStorage.setItem('menu', action.menu)
            return {
                ...state,
                ...{
                    menu: action.menu
                }
            }
        default:
            return state
    }
}
