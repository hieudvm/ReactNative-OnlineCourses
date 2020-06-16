import React, {useState} from 'react'
import { View, Text } from 'react-native'

const AuthenticationContext = React.createContext();    

const AuthenticationProvider = (props) => {
    const [authentication, setAuthentication] = useState()
    return <AuthenticationProvider.Provider value = {{authentication, setAuthentication}} >

    </AuthenticationProvider.Provider>
}

export default {AuthenticationProvider, AuthenticationContext}
