import React, { useState, useContext } from 'react'
import { View, Text } from 'react-native'
import { login } from '../core/service/authentication-service';

const AuthenticationContext = React.createContext();

const AuthenticationProvider = (props) => {
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
            value={{ login1, authentication, setAuthentication }}
        >
            {props.children}
        </AuthenticationContext.Provider>
    )
}

export { AuthenticationProvider, AuthenticationContext }
