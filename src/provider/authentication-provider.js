import React, { useReducer } from 'react'
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

    const [state, dispatch] = useReducer(reducer, initialState)
   
    return (
        <AuthenticationContext.Provider
            value={{ state, login: login(dispatch)}}
        >
            {props.children}
        </AuthenticationContext.Provider>
    )
}

export { AuthenticationProvider, AuthenticationContext }
