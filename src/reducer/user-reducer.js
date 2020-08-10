export const reducer = (prevState, action) => {
    switch (action.type) {
        case "GET_USER_INFORMAION_SUCCESS":
            return { ...prevState, isLoading: false, userInformation: action.data }
        case "CHANGE_PASSWORD_SUCCESS":
            return { ...prevState, isLoading: false, messageChange: action.messageChange }
        case "UPDATE_USER_PROFILE_SUCCESS":
            return { ...prevState, isLoading: false, messageUpdate: action.messageUpdate }
        case "GET_USER_INFORMAION_FAIL":
            return { ...prevState, isLoading: true }
        case "CHANGE_PASSWORD_FAIL":
            return { ...prevState, isLoading: true, messageChange: action.messageChange }
        case "UPDATE_USER_PROFILE_FAIL":
            return { ...prevState, isLoading: true, messageUpdate: action.messageUpdate }
        default:
            throw new Error();
    }
}