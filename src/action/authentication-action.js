import API from '../../api'
import { resume } from 'expo/build/AR'
import { AsyncStorage } from 'react-native';



export const login = (dispatch) => async (userName, password) => {
    await API.post('/user/login', {
        email: userName,
        password: password
    }).then(async (Response) => {
        if (Response.status === 200) {
            await AsyncStorage.setItem(
                'access_token',
                Response.data.token
            );
            // await AsyncStorage.setItem(
            //     'userInfo',
            //     Response.data.userInfo
            // );
            dispatch({ type: "LOGIN_SUCCESSED", data: Response.data, message: "Login success!" })
            
        } else {
            dispatch({type: "LOGIN_FAILED", message: "Invalid user name or password!"})
        }
    }).catch((Error) => {
        console.log("error", Error)
        dispatch({type: "LOGIN_FAILED", message: "Invalid user name or password!"})
    })

}

export const logout = (dispatch) => async () => {
    await AsyncStorage.removeItem("access_token");
    // await AsyncStorage.removeItem("userInfo");
    dispatch({
        type: "LOGOUT",
        message: ""
    })
}

export const resetPassword = (dispatch) => (userName) => {
    API.post('/user/forget-pass/send-email', {
        email: userName,
    }).then(async (Response) => {
        if (Response.status === 200) {
            dispatch({ type: "RESET_PASSWORD_SUCCESSED", data: Response.data, message: "Email is sent!" })
            
        } else {
            dispatch({type: "RESET_PASSWORD_FAILED", message: "Invalid email!"})
        }
    }).catch((Error) => {
        dispatch({type: "RESET_PASSWORD_FAILED", message: "Invalid email!"})
    })

}