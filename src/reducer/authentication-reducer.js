export const reducer = (prevState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESSED":
            return { ...prevState, isAuthenticated: true, token: action.data.token, userInfo: action.data.userInfo }
        case "LOGIN_FAILED":
            return {...prevState, isAuthenticated: false}
        default:
            throw new Error();
    }
}