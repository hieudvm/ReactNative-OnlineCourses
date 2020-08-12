import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import VideoPlayer from './VideoPlayer/video-player'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import ListLessons from './ListLessons/list-lessons';
import ScreenContainer from '../Common/screen-container';
import ThemedText from '../Common/themed-text';
import { FavouritesContext } from '../../provider/favourites-provider';
import { CourseDetailContext } from '../../../src/provider/courseDetail-provider'

const CourseDetail = (props) => {

    const courseDetailContext = useContext(CourseDetailContext)

    const courseLesson = courseDetailContext.state.sectionLesson.section
   
    const favoriteContext = useContext(FavouritesContext)

    const [favorite, setFavorite] = useState('Favorite')

    const item = props.route.params.item
    return (
        <ScreenContainer>
            <View style={{ flex: 2.5 }}>
                <VideoPlayer navigation={props.navigation} item={item} />
            </View>
            <ScrollView style={{ flex: 2 }}>
                <View style={styles.icon}>
                    <TouchableOpacity
                        onPress={() => {
                            if (favoriteContext.favouriteCourses.has(item.id)) {
                                setFavorite('Favorite')
                                favoriteContext.removeFavouriteCourse(item.id)
                            } else {
                                setFavorite('Not Favorite')
                                favoriteContext.addFavouriteCourse(item.id)
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
                    <ListLessons item={courseLesson} />
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
