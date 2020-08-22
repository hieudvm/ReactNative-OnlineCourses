import React, { useContext, useEffect, useState, useRef } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native'
import ScreenContainer from '../../Common/screen-container'
import ThemedText from '../../Common/themed-text'
import { AuthorContext } from '../../../provider/author-provider'
import { CoursesContext } from '../../../provider/courses-provider'
import { Video } from 'expo-av'
import Icon from 'react-native-vector-icons/FontAwesome';
import { FavouritesContext } from '../../../provider/favourites-provider'
import { VideoContext } from '../../../provider/video-provider'
import axios from 'axios';
import YoutubePlayer from 'react-native-youtube-iframe';
import { useFocusEffect } from '@react-navigation/native'

const { width, height } = Dimensions.get('window')
const VideoPlayer = (props) => {
    const videoContext = useContext(VideoContext)
    const authorContext = useContext(AuthorContext)
    const coursesContext = useContext(CoursesContext)
    const favoriteContext = useContext(FavouritesContext)

    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(true);

    const [lessonId, setLessonId] = useState(videoContext.lessonId)
    const [lessonName, setLessonName] = useState(props.item.title ? props.item.title : props.item.courseTitle)

    const [favorite, setFavorite] = useState('')
    const [url, setUrl] = useState(props.item.promoVidUrl)
    const [videoId, setVideoId] = useState("")

    useEffect(() => {
        authorContext.getInstructorById(props.item.instructorId)
        coursesContext.getCourseInformation(props.item.id)
        if (favoriteContext.state.likeStatus) {
            setFavorite('Liked')
        } else {
            setFavorite('like')
        }
    }, [])

    useFocusEffect(
        React.useCallback(() => {
            if (videoContext.videoUrl && videoContext.courseId === props.item.id) {
                setUrl(videoContext.videoUrl)
                if (url) {
                    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
                    var match = url.match(regExp);
                    if (match && match[2].length == 11) {
                        setVideoId(match[2])
                    }
                }
            }
        }, [videoContext.videoUrl, url])
    );

    useEffect(() => {
        if (videoContext.lessonId) {
            setLessonId(videoContext.lessonId)
        }
        if (props.item.id === videoContext.courseId) {
            setLessonName(videoContext.lessonName)
        }
    }, [videoContext.lessonId, videoContext.lessonName])

    useEffect(() => {
        if (url === null) {
            setUrl("http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4")
        }
    }, [url])

    return (
        <ScreenContainer>

            {String(url).includes('https://youtube.com/') ?
                <YoutubePlayer
                    ref={playerRef}
                    height={height / 3}
                    width={width}
                    videoId={videoId}
                    // videoUrl={url}
                    play={playing}
                    onChangeState={event => console.log(event)}
                    onReady={() => console.log("ready")}
                    onError={e => console.log(e)}
                    onPlaybackQualityChange={q => console.log(q)}
                    volume={50}
                    playbackRate={1}
                /> :
                <Video
                    source={{ uri: url }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay={true}
                    isLooping={false}
                    useNativeControls
                    style={styles.video}
                />}
            <View>
                {coursesContext.state.isLoading && <ActivityIndicator size="small" color="gray" />}
                <ThemedText style={{ fontSize: 20, marginLeft: 6 }}>{lessonName}</ThemedText>
                <TouchableOpacity
                    style={styles.touch}
                    onPress={() => {
                        props.navigation.navigate("AuthorDetail", { item: authorContext.state.instructor.id })
                    }}
                >
                    <Image style={styles.button} source={require('../../../../assets/senior-woman-avatar.jpg')} />
                    <View style={styles.text}>
                        {props.item.name ? <ThemedText>{props.item.name ? props.item.name : props.item["instructor.user.name"]}</ThemedText> : <ThemedText>{props.item["instructor.user.name"] ? props.item["instructor.user.name"] : props.item.instructorName}</ThemedText>}
                    </View>
                </TouchableOpacity>
                {props.item.videoNumber ? <ThemedText style={styles.darkText}>{`${props.item.videoNumber} video . ${props.item.totalHours} hours`}</ThemedText> : props.item.coursePrice ? <ThemedText style={styles.darkText}>{`${props.item.coursePrice} VND . sold ${props.item.courseSoldNumber}`}</ThemedText> : <ThemedText></ThemedText>}
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
                        axios.get(`/lesson/detail/${props.item.id}/${lessonId}`)
                            .then((Response) => {
                                if (Response.status === 200) {
                                    props.navigation.navigate("CourseDescriptions", { item: props.item })
                                }
                            }).catch((Error) => {
                            })
                    }}
                >
                    <View style={styles.iconItem}>
                        <View style={{ backgroundColor: 'gray', width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                            <Icon
                                name='check-square-o' size={30} />
                        </View>
                        <ThemedText>Learning check</ThemedText>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate("Rating", { item: props.item })
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
                <TouchableOpacity
                    disabled={String(url).includes('https://youtube.com/')}
                    onPress={() => {
                        props.navigation.navigate("DownloadVideo", { item: props.item, videoUrl: url, lessonName: lessonName })
                    }}
                >
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
