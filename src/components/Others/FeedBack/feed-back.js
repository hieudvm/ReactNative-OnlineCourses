import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import ScreenContainer from '../../Common/screen-container'
import axios from 'axios';

const Feedback = (props) => {
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')
    const [feedBackStatus, setFeedBackStatus] = useState("")

    return (
        <ScreenContainer>
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../../../assets/Logo.jpg')} />
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => setSubject(text)}
                    placeholder='subject'
                    defaultValue={subject}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => setContent(text)}
                    placeholder='content'
                    defaultValue={content}
                />
                <View>
                    <Text>{feedBackStatus}</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        axios.post('/feedback/create', {
                            "subject": subject,
                            "content": content,
                        }).then((Response) => {
                            if (Response.status === 200) {
                                setFeedBackStatus("Feed back is sent!")
                            } else {
                                setFeedBackStatus("Has Error!")
                            }
                        }).catch((Error) => {
                            setFeedBackStatus("Has Error!")
                        })
                    }}
                >
                    <Text style={styles.text}>Send Feedback</Text>
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

export default Feedback

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
        height: 200,
        marginBottom: 20
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
