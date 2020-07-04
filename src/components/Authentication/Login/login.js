import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { useEffect } from 'react'
import { AuthenticationContext } from '../../../provider/authentication-provider'
import ScreenContainer from '../../Common/screen-container'

const Login = (props) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [loginText, setLoginText] = useState('')

    const authContext = useContext(AuthenticationContext)

    const auth = authContext.authentication

    useEffect(() => {
        if (auth.status && auth.status === 200) {
            setLoginText('Login successed!')
            props.navigation.navigate("MainTab")
            setUserName('')
            setPassword('')
            setLoginText('')
        }
    }, [authContext])

    const renderLoginStatus = (status) => {
        console.log('status', status)
        if (!status) {
            return <View />
        } else if (status.status === 200) {
            return (<Text>{loginText}</Text>)
        } else {
            return (<Text>{status.errorString}</Text>)
        }
    }

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
                    {renderLoginStatus(authContext.authentication)}
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        authContext.login1(userName, password)
                    }}
                >
                    <Text style={styles.text}>Login</Text>
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
        backgroundColor: 'darkgray'
    },
    text: {
        color: 'white',
    }
})
