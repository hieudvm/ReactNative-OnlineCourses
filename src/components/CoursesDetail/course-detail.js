import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import VideoPlayer from './VideoPlayer/video-player'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import ListLessons from './ListLessons/list-lessons';
import ScreenContainer from '../Common/screen-container';
import ThemedText from '../Common/themed-text';
import { FavouritesContext } from '../../provider/favourites-provider';
import { AuthorContext } from '../../provider/author-provider';
import { CoursesContext } from '../../provider/courses-provider';
import { useFocusEffect } from '@react-navigation/native';

const CourseDetail = (props) => {
    const authorContext = useContext(AuthorContext)
    const favoriteContext = useContext(FavouritesContext)
    const coursesContext = useContext(CoursesContext)

    const [favorite, setFavorite] = useState('')

    const item = props.route.params.item

    const [course, setCourse] = useState({})

    useEffect(() => {
        favoriteContext.getCourseLikeStatus(item.id)
        console.log(favoriteContext.state.likeStatus)
        if (favoriteContext.state.likeStatus) {
            setFavorite('Liked')
        } else {
            setFavorite('like')
        }
        if (coursesContext.state.course) {
            setCourse(coursesContext.state.course)
        }
    }, [course])

    return (
        <ScreenContainer>
            <View style={{ flex: 2.5 }}>
                <VideoPlayer navigation={props.navigation} author = {authorContext.state.instructor.name} item={course} />
            </View>
            <ScrollView style={{ flex: 2 }}>
                <View style={styles.icon}>
                    <TouchableOpacity
                        onPress={() => {
                            if (favoriteContext.state.likeStatus) {
                                setFavorite('Like')
                                favoriteContext.likeCourse(item.id)
                                favoriteContext.getFavoriteCourses()
                            } else {
                                setFavorite('Liked')
                                favoriteContext.likeCourse(item.id)
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
                    <TouchableOpacity>
                        <View style={styles.iconItem}>
                            <View style={{ backgroundColor: 'gray', width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                                <Icon
                                    name='podcast' size={30} />
                            </View>
                            <ThemedText>Add to chanel</ThemedText>
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
                <View style={{ flex: 1 }}>
                    <ListLessons />
                </View>
            </ScrollView>
        </ScreenContainer>

    )
}

export default CourseDetail

const styles = StyleSheet.create({
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
