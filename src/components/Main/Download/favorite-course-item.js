import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ThemedText from '../../Common/themed-text'
import ScreenContainer from '../../Common/screen-container'
import { CoursesContext } from '../../../provider/courses-provider'
import { Rating } from 'react-native-elements'
import { CourseDetailContext } from '../../../provider/courseDetail-provider'
import { FavouritesContext } from '../../../provider/favourites-provider'

const FavoriteCourseItem = (props) => {
    const favoriteContext = useContext(FavouritesContext)
    const coursesContext = useContext(CoursesContext)
    const courseDetailContext = useContext(CourseDetailContext)
    
    const Image_Http_URL = { uri: props.item.courseImage }

    // useEffect(() => {
    //     coursesContext.getCourseInformation(props.item.id)
    // }, [])

    return (
        <TouchableOpacity
            onPress={() => {
                // coursesContext.getCourseInformation(props.item.id)
                favoriteContext.getCourseLikeStatus(props.item.id)
                courseDetailContext.getCourseDetailWithLession(props.item.id)
                props.navigation.push("CourseDescriptions", {item: props.item})
            }}
        >
            <ScreenContainer style={styles.item}>
                <Image source={Image_Http_URL} style={styles.image} />
                <View style={{ margin: 5}}>
                    <ThemedText>{props.item.courseTitle}</ThemedText>
                    <ThemedText>{props.item.instructorName}</ThemedText>
                    <ThemedText style={styles.darkText}>{props.item.coursePrice} VND </ThemedText>
                    <Rating imageSize={20} fractions="{1}" startingValue={props.item.courseContentPoint} />
                </View>
            </ScreenContainer>
        </TouchableOpacity>
    )
}

export default FavoriteCourseItem

const styles = StyleSheet.create({
    item: {
        margin: 6,
        height: 121,
        width: 400,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1

    },
    image: {
        width: 120,
        height: 120
    },
    darkText: {
        color: 'gray'
    }
})
