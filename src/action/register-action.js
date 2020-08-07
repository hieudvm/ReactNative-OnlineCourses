import API from '../../api'

export const register = (dispatch) => (userName, email, phone, password) => {
    API.post('/user/register', {
        userName: userName,
        email: email,
        phone: phone,
        password: password
    }).then(async (Response) => {
        if (Response.status === 200) {
            dispatch({ type: "REGISTER_SUCCESSED", messageRegister: "Please check your email!" })
            
        } else {
            dispatch({type: "REGISTER_FAILED", messageRegister: "Register fail!"})
        }
    }).catch((Error) => {
        dispatch({type: "REGISTER_FAILED", messageRegister: "Register fail!"})
    })

}

export const sendActiveEmail = (dispatch) => (email) => {
    API.post('/user/send-activate-email', {
        email: email,
    }).then(async (Response) => {
        if (Response.status === 200) {
            dispatch({ type: "SEND_ACTIVE_EMAIL_SUCCESSED", messageEmail: "Email was sent!" })
        } else {
            dispatch({type: "SEND_ACTIVE_EMAIL_FAILED", messageEmail: "Has error!"})
        }
    }).catch((Error) => {
        dispatch({type: "SEND_ACTIVE_EMAIL_FAILED", messageEmail: "Has error!"})
    })

}
