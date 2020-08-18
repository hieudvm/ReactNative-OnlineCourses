import axios from 'axios';

const getUserInformation = (dispatch) => () => {
    axios.get('/user/me')
    .then((Response) => {
        if (Response.status === 200) {
            dispatch({ type: "GET_USER_INFORMAION_SUCCESS", data: Response.data.payload })
        } else {
            dispatch({ type: "GET_USER_INFORMAION_FAIL" })
        }
    }).catch((Error) => {
        dispatch({ type: "GET_USER_INFORMAION_FAIL" })
    })
}

const changePassword = (dispatch) => (userId, oldPass, newPass) => {
    axios.post('/user/change-password', {
        "id": userId,
        "oldPass": oldPass,
        "newPass": newPass
    }).then((Response) => {
        if (Response.status === 200) {
            dispatch({ type: "CHANGE_PASSWORD_SUCCESS", messageChange: "Password is changed!" })
        } else {
            dispatch({ type: "CHANGE_PASSWORD_FAIL", messageChange: "Has Error!" })
        }
    }).catch((Error) => {
        dispatch({ type: "CHANGE_PASSWORD_FAIL", messageChange: "Has Error!" })
    })
}

const updateUserProfile = (dispatch) => (name, avatar, phone) => {
    axios.post('/user/update-profile', {
        "name": name,
        "avatar": avatar,
        "phone": phone
    }).then((Response) => {
        if (Response.status === 200) {
            dispatch({ type: "UPDATE_USER_PROFILE_SUCCESS", messageUpdate: "Update profile success!" })
        } else {
            dispatch({ type: "UPDATE_USER_PROFILE_FAIL", messageUpdate: "Has Error!" })
        }
    }).catch((Error) => {
        dispatch({ type: "UPDATE_USER_PROFILE_FAIL", messageUpdate: "Has Error!" })
    })
}

export {getUserInformation, changePassword, updateUserProfile}