import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native'
import ScreenContainer from '../../Common/screen-container'
import ThemedText from '../../Common/themed-text'
import { AuthorContext } from '../../../provider/author-provider'
import { CoursesContext } from '../../../provider/courses-provider'
import { Video } from 'expo-av'
import Icon from 'react-native-vector-icons/FontAwesome';
import { FavouritesContext } from '../../../provider/favourites-provider'
import { VideoContext } from '../../../provider/video-provider'
import { CourseDetailContext } from '../../../provider/courseDetail-provider'

const { width, height } = Dimensions.get('window')
const VideoPlayer = (props) => {
    const videoContext = useContext(VideoContext)
    const authorContext = useContext(AuthorContext)
    const coursesContext = useContext(CoursesContext)
    const favoriteContext = useContext(FavouritesContext)

    const [favorite, setFavorite] = useState('')
    const [url, setUrl] = useState(props.item.promoVidUrl)

    useEffect(() => {
        authorContext.getInstructorById(props.item.instructorId)
        coursesContext.getCourseInformation(props.item.id)
        if (favoriteContext.state.likeStatus) {
            setFavorite('Liked')
        } else {
            setFavorite('like')
        }
    }, [])
    
    useEffect(() => {
        console.log("set")
        if (videoContext.videoUrl) {
            setUrl(videoContext.videoUrl)
        }
    }, [videoContext.videoUrl])

    return (
        <ScreenContainer>
            <Video
                source={{ uri: url }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay={false}
                isLooping={false}
                useNativeControls
                style={styles.video}
            />
            <View>
                {coursesContext.state.isLoading && <ActivityIndicator size="small" color="gray" />}
                <ThemedText style={{ fontSize: 20, marginLeft: 6 }}>{props.item.title ? props.item.title : props.item.courseTitle}</ThemedText>
                <TouchableOpacity
                    style={styles.touch}
                    onPress={() => {
                        props.navigation.push("AuthorDetail", { item: authorContext.state.instructor.id })
                    }}
                >
                    <Image style={styles.button} source={require('../../../../assets/senior-woman-avatar.jpg')} />
                    <View style={styles.text}>
                        {props.item.name ? <ThemedText>{props.item.name ? props.item.name : props.item["instructor.user.name"]}</ThemedText> : <ThemedText>{props.item["instructor.user.name"] ? props.item["instructor.user.name"] : props.item.instructorName}</ThemedText>}
                    </View>
                </TouchableOpacity>
                {props.item.videoNumber ? <ThemedText style={styles.darkText}>{`${props.item.videoNumber} video . ${props.item.totalHours} hours`}</ThemedText> : <ThemedText style={styles.darkText}>{`${props.item.coursePrice} VND . sold ${props.item.courseSoldNumber}`}</ThemedText>}
            </View>
            <View style={styles.icon}>
                    <TouchableOpacity
                        onPress={() => {
                            if (favoriteContext.state.likeStatus) {
                                setFavorite('Like')
                                favoriteContext.likeCourse(props.item.id)
                                favoriteContext.getFavoriteCourses()
                            } else {
                                setFavorite('Liked')
                                favoriteContext.likeCourse(props.item.id)
                                favoriteContext.getFavoriteCourses()
                            }
                        }}
                    >
                        <View style={styles.iconItem}>
                            <View style={{ backgroundColor: 'gray', width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                                <Icon
                                    name='bookmark' size={30} />
                            </View>
                            <ThemedText>{favorite}</ThemedText>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.push("Rating", { item: props.item })
                        }}
                    >
                        <View style={styles.iconItem}>
                            <View style={{ backgroundColor: 'gray', width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                                <Icon
                                    name='podcast' size={30} />
                            </View>
                            <ThemedText>Rating</ThemedText>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.iconItem}>
                            <View style={{ backgroundColor: 'gray', width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                                <Icon
                                    name='download' size={30} />
                            </View>
                            <ThemedText>Download</ThemedText>
                        </View>
                    </TouchableOpacity>
                </View>
        </ScreenContainer>
    )
}

export default VideoPlayer

const styles = StyleSheet.create({
    item: {
        margin: 6,
        height: 120,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    video: {
        width: width,
        height: height / 3,
    },
    button: {
        height: 20,
        width: 20,
        marginLeft: 6,
        marginTop: 6,
        borderRadius: 10
    },
    touch: {
        alignContent: 'center',
        flexDirection: 'row'

    },
    text: {
        fontSize: 13,
        fontFamily: 'Roboto',
        color: 'black',
        paddingHorizontal: 'auto',
        marginLeft: 6,
        marginTop: 6
    },
    darkText: {
        marginLeft: 6,
        paddingLeft: 28,
        color: 'darkgray'
    },
    icon: {
        margin: 6,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    iconItem: {
        alignItems: 'center',
        margin: 6
    }
})
