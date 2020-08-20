import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { AuthenticationContext } from '../../../provider/authentication-provider'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const renderSendStatus = (status, message) => {
    if (!status) {
        return <View />
    } else if (status) {
    return (<Text>{message}</Text>)
    } else {
        return (<Text>{message}</Text>)
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const ForgetPassword = (props) => {
    const authContext = useContext(AuthenticationContext)
    const [userName, setUserName] = useState('')
    const [userNameStatus, setUserNameStatus] = useState("")
    
    return (
        <View style={styles.container}>
                <Image style={styles.image} source={require('../../../../assets/Logo.jpg')} />
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => {
                        if (validateEmail(text)) {
                            setUserNameStatus("Email is valid!")
                            setUserName(text)
                        } else {
                            setUserNameStatus("Email is not valid!")
                        }
                    }}
                    placeholder='Please type your email!'
                    defaultValue={userName}
                />
                <Text>{userNameStatus}</Text>
                <View>
                    {renderSendStatus(authContext.state.isSent, authContext.state.message)}
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        authContext.resetPassword(userName)
                    }}
                >
                    <Text style={styles.text}>Send confirmation email</Text>
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
    )
}

export default ForgetPassword

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
