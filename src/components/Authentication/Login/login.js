import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { useEffect } from 'react'
import { AuthenticationContext } from '../../../provider/authentication-provider'
import ScreenContainer from '../../Common/screen-container'

const renderLoginStatus = (status, message) => {
    if (status) {
     return (<Text>{message}</Text>)
     } else {
         return (<Text>{message}</Text>)
     }
 }
const Login = (props) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const authContext = useContext(AuthenticationContext)

    useEffect(() => {
        if (authContext.state.isAuthenticated) {
            props.navigation.navigate("MainTab")
            setUserName('')
            setPassword('')
        }
    }, [authContext.state.isAuthenticated])

    return (
        <ScreenContainer>
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../../../assets/Logo.jpg')} />
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => setUserName(text)}
                    placeholder='username'
                    defaultValue={userName}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => setPassword(text)}
                    placeholder='password'
                    secureTextEntry
                    defaultValue={password}
                />
                <View>
                    {renderLoginStatus(authContext.state.isAuthenticated, authContext.state.message)}
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        authContext.login(userName, password)
                        // .then(() => {
                        //     props.navigation.navigate("MainTab");
                        // })
                    }}
                >
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        props.navigation.navigate("ForgotPassword")
                    }}
                >
                    <Text style={styles.text}>Forgot password</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        props.navigation.navigate("Welcome")
                    }}
                >
                    <Text style={styles.text}>Back to Home page</Text>
                </TouchableOpacity>
            </View>
        </ScreenContainer>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        width: 350,
        height: 50,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 3,
        margin: 10,
        marginTop: 0,
        padding: 10
    },
    image: {
        width: 200,
        height: 200
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 50,
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 20,
        backgroundColor: 'darkgray',
        marginBottom: 10
    },
    text: {
        color: 'white',
    }
})
