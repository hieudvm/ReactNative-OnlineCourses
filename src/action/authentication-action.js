import API from '../../api'
import { resume } from 'expo/build/AR'




export const login = (dispatch) => (userName, password) => {
    API.post('/user/login', {
        email: 'duonghieu7233@gmail.com',
        password: 'duonghieu1'
    }).then((Response) => {
        if (Response.status === 200) {
            dispatch({ type: "LOGIN_SUCCESSED", data: Response.data })
            
        } else {
            dispatch({type: "LOGIN_FAILED"})
        }
    }).catch((Error) => {
        dispatch({type: "LOGIN_FAILED"})
    })

}