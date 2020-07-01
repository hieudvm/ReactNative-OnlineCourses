import React, {useState} from 'react'
import { View, Text } from 'react-native'

const AuthenticationContext = React.createContext();    

const AuthenticationProvider = (props) => {
    const [authentication, setAuthentication] = useState()
    return <AuthenticationContext.Provider value = {{authentication, setAuthentication}} >

    </AuthenticationContext.Provider>
}

export default {AuthenticationProvider, AuthenticationContext}
