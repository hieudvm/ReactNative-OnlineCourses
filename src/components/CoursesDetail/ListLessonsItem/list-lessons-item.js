import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, CheckBox } from 'react-native'
import ScreenContainer from '../../Common/screen-container'
import ThemedText from '../../Common/themed-text'
import { VideoContext } from '../../../provider/video-provider'
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const ListLessonsItem = (props) => {
    const videoContext = useContext(VideoContext)
    const [isExcercise, setIsExcercise] = useState(false)
    const [isSelected, setSelection] = useState(false);
    const [learningStatus, setLearningStatus] = useState("")

    useEffect(() => {
        if (props.item.id) {
            axios.post('/exercise/student/list-exercise-lesson', {
                "lessonId": props.item.id,
            }).then((Response) => {
                if (Response.data.payload.exercises.length === 0) {
                    setIsExcercise(false)
                } else {
                    setIsExcercise(true)
                }
            }).catch((Error) => {
                setIsExcercise(false)
            })
        }
    }, [])

    useEffect(() => {
        axios.get(`/lesson/detail/${props.course.id}/${props.item.id}`)
            .then((Response) => {
                if (Response.status === 200) {
                    if (Response.data.payload.isFinish) {
                        setSelection(true)
                        setLearningStatus("checked")
                    } else {
                        setSelection(false)
                        setLearningStatus("check")
                    }
                }
            }).catch((Error) => {
                setSelection(false)
                setLearningStatus("check")
            })
    }, [isSelected])
    return (
        <TouchableOpacity style={styles.item}
            onPress={() => {
                videoContext.setLessonId(props.item.id)
                videoContext.setVideoUrl(props.item.videoUrl)
            }}
        >
            <Image source={require('../../../../assets/reactNative.png')} style={styles.image} />
            <ScreenContainer>
                <View style={{ margin: 10 }}>
                    <ThemedText>{props.item.name}</ThemedText>
                    <ThemedText style={styles.darkText}>{`${props.item.hours}`}</ThemedText>
                </View>
            </ScreenContainer>
            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                <CheckBox
                    value={isSelected}
                    onValueChange={() => {
                        videoContext.setLessonId(props.item.id)
                        axios.post(`/lesson/update-status`, {
                            lessonId: props.item.id
                        }).then((Response) => {
                            if (Response.status === 200) {
                                setSelection(true)
                                setLearningStatus("checked")
                            } else {
                                setSelection(false)
                                setLearningStatus("check")
                            }
                        }).catch((Error) => {
                            setSelection(false)
                            setLearningStatus("check")
                        })
                    }}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>{learningStatus}</Text>
            </View>
            {isExcercise ? <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate("CourseExcercise", { item: props.course })
                }}
            >
                <View style={{ alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                    <Icon
                        name='file-word-o' size={20} />
                    <ThemedText>Excercise</ThemedText>
                </View>
            </TouchableOpacity> : <View></View>}

        </TouchableOpacity>
    )
}

export default ListLessonsItem

const styles = StyleSheet.create({
    item: {
        margin: 6,
        height: 120,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 20,
    },
    darkText: {
        color: 'darkgray'
    },
    iconItem: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 6,
        padding: 10
    },
    checkbox: {
        alignSelf: "center",
        width: 20,
        height: 20
    }
})
