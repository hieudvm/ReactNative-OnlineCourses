export const reducer = (prevState, action) => {
    switch (action.type) {
        case "REGISTER_SUCCESSED":
            return { ...prevState, isLoading: false, messageRegister: action.messageRegister }
        case "SEND_ACTIVE_EMAIL_SUCCESSED":
            return { ...prevState, isLoading: false, messageEmail: action.messageEmail }
        case "SEND_ACTIVE_EMAIL_FAILED":
            return { ...prevState, isLoading: true, messageEmail: action.messageEmail }
        case "REGISTER_FAILED":
            return { ...prevState, isLoading: true, messageRegister: action.messageRegister }
        default:
            throw new Error();
    }
}