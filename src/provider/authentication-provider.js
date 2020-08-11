import React, { useReducer, useState } from 'react'
import {reducer} from '../../src/reducer/authentication-reducer'
import {login} from '../../src/action/authentication-action'

const AuthenticationContext = React.createContext();

const initialState = {
    isAuthenticated: false,
    message: "",
    userInfo: null,
    token: null
}

const AuthenticationProvider = (props) => {
    const [loginStatus, setLoginStatus] = useState('')

    const [state, dispatch] = useReducer(reducer, initialState)
   
    return (
        <AuthenticationContext.Provider
            value={{ loginStatus, setLoginStatus, state, login: login(dispatch)}}
        >
            {props.children}
        </AuthenticationContext.Provider>
    )
}

export { AuthenticationProvider, AuthenticationContext }
