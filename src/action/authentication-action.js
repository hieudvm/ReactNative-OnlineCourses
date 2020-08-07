import API from '../../api'
import { resume } from 'expo/build/AR'
import { AsyncStorage } from 'react-native';



export const login = (dispatch) => (userName, password) => {
    API.post('/user/login', {
        email: userName,
        password: password
    }).then(async (Response) => {
        if (Response.status === 200) {
            await AsyncStorage.setItem(
                'access_token',
                Response.data.token
            );
            dispatch({ type: "LOGIN_SUCCESSED", data: Response.data })
            
        } else {
            dispatch({type: "LOGIN_FAILED"})
        }
    }).catch((Error) => {
        dispatch({type: "LOGIN_FAILED"})
    })

}