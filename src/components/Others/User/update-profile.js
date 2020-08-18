import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native'
import { TextInput, TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import axios from 'axios';
import { UserContext } from '../../../provider/user-provider';


const UpdateProfile = (props) => {
    const userContext = useContext(UserContext)
    const Image_Http_URL = { uri: userContext.state.userInformation.avatar }
    const [fullName, setFullName] = useState(userContext.state.userInformation.name)
    const [phoneNumber, setPhoneNumber] = useState(userContext.state.userInformation.phone)
    const [updateStatus, setUpdateStatus] = useState("")

    const email = props.route.params.email;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={Image_Http_URL} />
            <View style={styles.layout}>
                <Text style={styles.text}>{email}</Text>
            </View>
            <TextInput
                style={styles.textInput}
                onChangeText={text => setFullName(text)}
                placeholder='Full Name'
                defaultValue={fullName}
            />
            <TextInput
                style={styles.textInput}
                onChangeText={text => setPhoneNumber(text)}
                placeholder='Phone Number'
                defaultValue={phoneNumber}
            />
            <View>
                <Text>{updateStatus}</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    axios.put('/user/update-profile', {
                        "name": fullName,
                        // "avatar": avatar,
                        "phone": phoneNumber
                    }).then((Response) => {
                        if (Response.status === 200) {
                            setUpdateStatus("Update profile success!")
                        } else {
                            setUpdateStatus("Has Error!")
                        }
                    }).catch((Error) => {
                        setUpdateStatus("Has Error!")
                    })
                    userContext.getUserInformation()
                }}
            >
                <Text style={styles.text}>Update profile</Text>
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
    )
}

export default UpdateProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    layout: {
        width: 350,
        height: 50,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 3,
        margin: 10,
        padding: 10,
        backgroundColor: 'gray',
        alignItems: 'center',
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
