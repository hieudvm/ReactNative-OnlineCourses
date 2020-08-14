import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native'
import { TextInput, TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import { RegisterContext } from '../../../provider/register-provider'

const renderRegisterStatus = (status, message) => {
    if (status) {
        return <View />
    } else if (!status) {
        return (<Text>{message}</Text>)
    } else {
        return (<Text>{message}</Text>)
    }
}

const Register = (props) => {

    const registerContext = useContext(RegisterContext)

    const [fullName, setFullName] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    useEffect(() => {
        if (!registerContext.state.isLoading) {
            props.navigation.navigate("MainTab")
            setFullName('')
            setUserName('')
            setPassword('')
            setRePassword('')
            setPhoneNumber('')
        }
    }, [])

   
    return (
        <ScrollView>
             <View style={styles.container}>
                <Image style={styles.image} source={require('../../../../assets/Logo.jpg')} />
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => setFullName(text)}
                    placeholder='Full Name'
                    defaultValue={fullName}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => setUserName(text)}
                    placeholder='User Name'
                    defaultValue={userName}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => setPassword(text)}
                    placeholder='Password'
                    secureTextEntry
                    defaultValue={password}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => setRePassword(text)}
                    placeholder='Re - Password'
                    secureTextEntry
                    defaultValue={rePassword}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => setPhoneNumber(text)}
                    placeholder='Phone Number'
                    defaultValue={phoneNumber}
                />
                <View>
                    {renderRegisterStatus(registerContext.state.isLoading, registerContext.state.messageRegister)}
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        registerContext.register(fullName, userName, phoneNumber, password)
                    }}
                >
                    <Text style={styles.text}>Register</Text>
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
        </ScrollView>
    )
}

export default Register

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
