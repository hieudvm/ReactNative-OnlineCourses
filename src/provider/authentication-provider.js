import React, { useState, useContext } from 'react'
import { View, Text } from 'react-native'
import { login } from '../core/service/authentication-service';
import {reducer} from '../../src/reducer/authentication-reducer'
import {login} from '../../src/action/authentication-action'

const AuthenticationContext = React.createContext();

const initialState = {
    isAuthenticated: false,
    userInfo: null,
    token: null
}

const AuthenticationProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const [user, setUser] = useContext();

    const login1 = (username, password) => {
        setAuthentication(login(username, password))
    }

    const [authentication, setAuthentication] = useState({
        status: 0,
        data: {}
    })
    return (
        <AuthenticationContext.Provider
            value={{ state, login: login(dispatch)}}
        >
            {props.children}
        </AuthenticationContext.Provider>
    )
}

export { AuthenticationProvider, AuthenticationContext }
