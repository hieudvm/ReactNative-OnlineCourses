import React, { useReducer, useState } from 'react'
import { reducer } from '../../src/reducer/authentication-reducer'
import { login, logout, resetPassword } from '../../src/action/authentication-action'

const AuthenticationContext = React.createContext();

const initialState = {
    isAuthenticated: false,
    isSent: false,
    message: "",
    userInfo: null,
    token: null
}

const AuthenticationProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AuthenticationContext.Provider
            value={{
                state,
                login: login(dispatch),
                logout: logout(dispatch),
                resetPassword: resetPassword(dispatch)
            }}
        >
            {props.children}
        </AuthenticationContext.Provider>
    )
}

export { AuthenticationProvider, AuthenticationContext }
