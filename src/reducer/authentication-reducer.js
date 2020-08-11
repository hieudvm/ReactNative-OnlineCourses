
export const reducer = (prevState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESSED":
            return { ...prevState, isAuthenticated: true, token: action.data.token, userInfo: action.data.userInfo, message: action.message }
        case "LOGIN_FAILED":
            return { ...prevState, isAuthenticated: false, message: action.message }
        case "RESET_PASSWORD_SUCCESSED":
            return { ...prevState, isSent: true, message: action.message }
        case "RESET_PASSWORD_FAILED":
            return { ...prevState, isSent: false, message: action.message }
        case "LOGOUT":
            return { ...prevState, isAuthenticated: false, message: action.message, userInfo: null, token: null }
        default:
            throw new Error();
    }
}