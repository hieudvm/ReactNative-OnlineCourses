import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, Image, ActivityIndicator, Dimensions } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import ScreenContainer from '../../Common/screen-container'
import { UserContext } from '../../../provider/user-provider';
import axios from 'axios';

const { width, height } = Dimensions.get('window')
const ChangePassword = (props) => {
    const userContext = useContext(UserContext)
    const [newPassword, setNewPassword] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [changeStatus, setChangeStatus] = useState("")
    const [passwordStatus, setPasswordStatus] = useState("")
    const Image_Http_URL = { uri: userContext.state.userInformation.avatar }

    return (
        <ScreenContainer>
            <View style={styles.container}>
                <Image style={styles.image} source={Image_Http_URL} />
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => setOldPassword(text)}
                    placeholder='old password'
                    secureTextEntry
                    defaultValue={oldPassword}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => setNewPassword(text)}
                    placeholder='new password'
                    secureTextEntry
                    defaultValue={newPassword}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => {
                        if (text === newPassword) {
                            setPasswordStatus("Password is matched!")
                            setRePassword(text)
                        } else {
                            setPasswordStatus("Password does not matched!")
                        }
                    }}
                    placeholder='re - Password'
                    secureTextEntry
                    defaultValue={rePassword}
                />
                <Text>{passwordStatus}</Text>
                <View>
                    <Text>{changeStatus}</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        if (rePassword === newPassword) {
                            axios.post('/user/change-password', {
                                "id": userContext.state.userInformation.id,
                                "oldPass": oldPassword,
                                "newPass": newPassword
                            }).then((Response) => {
                                if (Response.status === 200) {
                                    setChangeStatus("Password is changed!")
                                } else {
                                    setChangeStatus("Has Error!")
                                }
                            }).catch((Error) => {
                                setChangeStatus("Has Error!")
                            })
                        }
                    }}
                >
                    <Text style={styles.text}>Change Password</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        props.navigation.navigate("Home")
                    }}
                >
                    <Text style={styles.text}>Back to Home page</Text>
                </TouchableOpacity>
            </View>
        </ScreenContainer>
    )
}

export default ChangePassword

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
        width: width/5,
        height: height/5,
        marginBottom: 10
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
