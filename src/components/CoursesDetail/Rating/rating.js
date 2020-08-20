import React, { useState } from 'react'
import { StyleSheet, View, Image, Button, Text } from 'react-native'
import ScreenContainer from '../../../components/Common/screen-container'
import ThemedText from '../../../components/Common/themed-text'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import axios from 'axios';

const Rating = (props) => {
    const item = props.route.params.item
    const Image_Http_URL = { uri: item.imageUrl }

    const [formalityPoint, setFormalityPoint] = useState(0)
    const [contentPoint, setContentPoint] = useState(0)
    const [presentationPoint, setPresentationPoint] = useState(0)
    const [comment, setComment] = useState("")
    const [sendStatus, setSendStatus] = useState("")
    const [showButton, setShowButton] = useState(false)

    const [formalityPoint1, setFormalityPoint1] = useState('gray')
    const [formalityPoint2, setFormalityPoint2] = useState('gray')
    const [formalityPoint3, setFormalityPoint3] = useState('gray')
    const [formalityPoint4, setFormalityPoint4] = useState('gray')
    const [formalityPoint5, setFormalityPoint5] = useState('gray')

    const [contentPoint1, setContentPoint1] = useState('gray')
    const [contentPoint2, setContentPoint2] = useState('gray')
    const [contentPoint3, setContentPoint3] = useState('gray')
    const [contentPoint4, setContentPoint4] = useState('gray')
    const [contentPoint5, setContentPoint5] = useState('gray')

    const [presentationPoint1, setPresentationPoint1] = useState('gray')
    const [presentationPoint2, setPresentationPoint2] = useState('gray')
    const [presentationPoint3, setPresentationPoint3] = useState('gray')
    const [presentationPoint4, setPresentationPoint4] = useState('gray')
    const [presentationPoint5, setPresentationPoint5] = useState('gray')

    return (
        <ScreenContainer>
            <ScreenContainer style={styles.item} >
                <Image source={Image_Http_URL} style={styles.image} />
                <View style={{ margin: 10 }}>
                    <ThemedText>{item.title}</ThemedText>
                    <ThemedText>{item["instructor.user.name"]}</ThemedText>
                    <ThemedText style={styles.darkThemedText}>{`${item.price} VND . ${item.totalHours} hours`}</ThemedText>
                </View>
            </ScreenContainer>
            <View style={{ margin: 6, flex: 5 }}>
                <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, paddingBottom: 15 }}>
                    <View style={{ flexDirection: 'row', margin: 6 }}>
                        <ThemedText style={{ margin: 10, width: 120 }}>Formality Point:</ThemedText>
                        <Button onPress={() => {
                            setFormalityPoint(1)
                            setFormalityPoint1('yellow')
                            setFormalityPoint2('gray')
                            setFormalityPoint3('gray')
                            setFormalityPoint4('gray')
                            setFormalityPoint5('gray')
                        }} title='1' style={{ width: 100, height: 40 }} color={formalityPoint1} />
                        <Button onPress={() => {
                            setFormalityPoint(2)
                            setFormalityPoint1('yellow')
                            setFormalityPoint2('yellow')
                            setFormalityPoint3('gray')
                            setFormalityPoint4('gray')
                            setFormalityPoint5('gray')
                        }} title='2' style={{ width: 100, height: 40 }} color={formalityPoint2} />
                        <Button onPress={() => {
                            setFormalityPoint(3)
                            setFormalityPoint1('yellow')
                            setFormalityPoint2('yellow')
                            setFormalityPoint3('yellow')
                            setFormalityPoint4('gray')
                            setFormalityPoint5('gray')
                        }} title='3' style={{ width: 100, height: 40 }} color={formalityPoint3} />
                        <Button onPress={() => {
                            setFormalityPoint(4)
                            setFormalityPoint1('yellow')
                            setFormalityPoint2('yellow')
                            setFormalityPoint3('yellow')
                            setFormalityPoint4('yellow')
                            setFormalityPoint5('gray')
                        }} title='4' style={{ width: 100, height: 40 }} color={formalityPoint4} />
                        <Button onPress={() => {
                            setFormalityPoint(5)
                            setFormalityPoint1('yellow')
                            setFormalityPoint2('yellow')
                            setFormalityPoint3('yellow')
                            setFormalityPoint4('yellow')
                            setFormalityPoint5('yellow')
                        }} title='5' style={{ width: 100, height: 40 }} color={formalityPoint5} />
                    </View>
                    <View style={{ flexDirection: 'row', margin: 6 }}>
                        <ThemedText style={{ margin: 10, width: 120 }}>Content Point:</ThemedText>
                        <Button onPress={() => {
                            setContentPoint(1)
                            setContentPoint1('yellow')
                            setContentPoint2('gray')
                            setContentPoint3('gray')
                            setContentPoint4('gray')
                            setContentPoint5('gray')
                        }} title='1' style={{ width: 100, height: 40 }} color={contentPoint1} />
                        <Button onPress={() => {
                            setContentPoint(2)
                            setContentPoint1('yellow')
                            setContentPoint2('yellow')
                            setContentPoint3('gray')
                            setContentPoint4('gray')
                            setContentPoint5('gray')
                        }} title='2' style={{ width: 100, height: 40 }} color={contentPoint2} />
                        <Button onPress={() => {
                            setContentPoint(3)
                            setContentPoint1('yellow')
                            setContentPoint2('yellow')
                            setContentPoint3('yellow')
                            setContentPoint4('gray')
                            setContentPoint5('gray')
                        }} title='3' style={{ width: 100, height: 40 }} color={contentPoint3} />
                        <Button onPress={() => {
                            setContentPoint(4)
                            setContentPoint1('yellow')
                            setContentPoint2('yellow')
                            setContentPoint3('yellow')
                            setContentPoint4('yellow')
                            setContentPoint5('gray')
                        }} title='4' style={{ width: 100, height: 40 }} color={contentPoint4} />
                        <Button onPress={() => {
                            setContentPoint(5)
                            setContentPoint1('yellow')
                            setContentPoint2('yellow')
                            setContentPoint3('yellow')
                            setContentPoint4('yellow')
                            setContentPoint5('yellow')
                        }} title='5' style={{ width: 100, height: 40 }} color={contentPoint5} />
                    </View>
                    <View style={{ flexDirection: 'row', margin: 6 }}>
                        <ThemedText style={{ margin: 10, width: 120 }}>Presentation Point:</ThemedText>
                        <Button onPress={() => {
                            setPresentationPoint(1)
                            setPresentationPoint1('yellow')
                            setPresentationPoint2('gray')
                            setPresentationPoint3('gray')
                            setPresentationPoint4('gray')
                            setPresentationPoint5('gray')
                        }} title='1' style={{ width: 100, height: 40 }} color={presentationPoint1} />
                        <Button onPress={() => {
                            setPresentationPoint(2)
                            setPresentationPoint1('yellow')
                            setPresentationPoint2('yellow')
                            setPresentationPoint3('gray')
                            setPresentationPoint4('gray')
                            setPresentationPoint5('gray')
                        }} title='2' style={{ width: 100, height: 40 }} color={presentationPoint2} />
                        <Button onPress={() => {
                            setPresentationPoint(3)
                            setPresentationPoint1('yellow')
                            setPresentationPoint2('yellow')
                            setPresentationPoint3('yellow')
                            setPresentationPoint4('gray')
                            setPresentationPoint5('gray')
                        }} title='3' style={{ width: 100, height: 40 }} color={presentationPoint3} />
                        <Button onPress={() => {
                            setPresentationPoint(4)
                            setPresentationPoint1('yellow')
                            setPresentationPoint2('yellow')
                            setPresentationPoint3('yellow')
                            setPresentationPoint4('yellow')
                            setPresentationPoint5('gray')
                        }} title='4' style={{ width: 100, height: 40 }} color={presentationPoint4} />
                        <Button onPress={() => {
                            setPresentationPoint(5)
                            setPresentationPoint1('yellow')
                            setPresentationPoint2('yellow')
                            setPresentationPoint3('yellow')
                            setPresentationPoint4('yellow')
                            setPresentationPoint5('yellow')
                        }} title='5' style={{ width: 100, height: 40 }} color={presentationPoint5} />
                    </View>
                </View>
                <View style={{ padding: 15, borderColor: 'gray', borderWidth: 1, marginTop: 10, height: 200 }}>
                    <TextInput
                        multiline
                        onChangeText={text => setComment(text)}
                        placeholder='comment'
                        defaultValue={comment}
                    />
                </View>
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            axios.post('/course/rating-course', {
                                courseId: item.id,
                                formalityPoint: formalityPoint,
                                contentPoint: contentPoint,
                                presentationPoint: presentationPoint,
                                content: comment
                            }).then(async (Response) => {
                                if (Response.status === 200) {
                                    setSendStatus("Rating is sent!")
                                    setShowButton(true)
                                } else {
                                    setShowButton(false)
                                    setSendStatus("Has error!")
                                }
                            }).catch((Error) => {
                                setShowButton(false)
                                setSendStatus("Has error!")
                            })
                        }}
                    >
                        <Text style={styles.text}>Send rating</Text>
                    </TouchableOpacity>
                    <View>
                        <ThemedText>{sendStatus}</ThemedText>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            axios.get(`/course/get-course-detail/${item.id}/null`).then((Response) => {
                                if (Response.status === 200) {
                                    props.navigation.navigate("RatingCourse", { item: Response.data.payload })
                                } else {
                                }
                            }).catch((Error) => {
                            })
                        }}
                    >
                        <Text style={styles.text}>Show student reviews</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScreenContainer>
    )
}

export default Rating

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        margin: 6,
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    darkText: {
        color: 'darkgray'
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
