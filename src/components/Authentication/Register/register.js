import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScreenContainer } from 'react-native-screens'
import { Image } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const register = () => {

    const [fullName, setFullName] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [phoneNumber, setRePassword] = useState('')

    return (
        <ScreenContainer>
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
                    {renderLoginStatus(authContext.state.isAuthenticated)}
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        authContext.login(userName, password)
                    }}
                >
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
            </View>
        </ScreenContainer>
    )
}
    )
}

export default register

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
