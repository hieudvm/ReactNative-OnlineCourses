import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { AuthenticationContext } from '../../../provider/authentication-provider'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const ForgetPassword = (props) => {
    const authContext = useContext(AuthenticationContext)
    const [userName, setUserName] = useState('')

    const renderSendStatus = (status) => {
        if (!status) {
            return <View />
        } else if (status) {
        return (<Text>{authContext.state.message}</Text>)
        } else {
            return (<Text>{authContext.state.message}</Text>)
        }
    }

    return (
        <View style={styles.container}>
                <Image style={styles.image} source={require('../../../../assets/Logo.jpg')} />
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => setUserName(text)}
                    placeholder='Please type your email!'
                    defaultValue={userName}
                />
                <View>
                    {renderSendStatus(authContext.state.isSent)}
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
