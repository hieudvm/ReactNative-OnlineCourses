import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import ThemedText from '../../Common/themed-text';
import ScreenContainer from '../../Common/screen-container';
import { CoursesContext } from '../../../provider/courses-provider';
import { FavouritesContext } from '../../../provider/favourites-provider';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import FavoriteCourseItem from './favorite-course-item';

const Download = (props) => {
    const courseContext = useContext(CoursesContext)
    const favoriteContext = useContext(FavouritesContext)

    const renderListItem = (courses) => {
        return courses.map(item => <FavoriteCourseItem navigation={props.navigation} item={item} />);
    }

    const randomnumber = Math.floor(Math.random() * (700 - 200 + 1)) + 200
    Image_Http_URL = { uri: `https://picsum.photos/${randomnumber}` }

    const courseTemp = []
    const course = Array.from(favoriteContext.favouriteCourses)
    for (const x of favoriteContext.favouriteCourses) {
        courseTemp.push(courseContext.courses[x - 1])
    }
    if (course.length === 0) {
        return (
            <ScreenContainer style={styles.iconItem}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Icon
                        name='bookmark' size={60} color='darkgray' />
                </View>
                <ThemedText style={{ textAlign: 'center', color: 'darkgray' }}>Courses you favorite will appear here</ThemedText>
            </ScreenContainer>
        )
    } else {
        return (
            <ScreenContainer>
                <FlatList
                    data={courseTemp}
                    renderItem={({ item }) => <FavoriteCourseItem navigation={props.navigation} item={item} />}
                />
            </ScreenContainer>
        )
    }
}

export default Download

const styles = StyleSheet.create({
    iconItem: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center'
    }
})
