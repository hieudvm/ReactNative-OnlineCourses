import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const Login = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/Logo.jpg')} />
            <TextInput
                style={styles.textInput}
                placeholder='username'
            />
            <TextInput
                style={styles.textInput}
                placeholder= 'password'
                secureTextEntry
            />
            <TouchableOpacity
                style={styles.button}    
            >
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
        </View>
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
        backgroundColor: 'gray'
    },
    text: {
        color: 'white',
    }
})
