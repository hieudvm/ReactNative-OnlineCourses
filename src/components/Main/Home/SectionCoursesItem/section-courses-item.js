import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ScreenContainer from '../../../Common/screen-container'
import ThemedText from '../../../Common/themed-text'
import { Rating, AirbnbRating } from 'react-native-elements';
import { CourseDetailContext } from '../../../../provider/courseDetail-provider'

const SectionCoursesItem = (props) => {
    const courseDetailContext = useContext(CourseDetailContext)

    const Image_Http_URL = { uri: props.item.imageUrl }
    return (
        <TouchableOpacity
            onPress={() => {
                courseDetailContext.getCourseDetailWithLession(props.item.id)
                props.navigation.push("CourseDescriptions", { item: props.item })
            }}
        >
            <ScreenContainer style={styles.item}>
                <Image source={Image_Http_URL} style={styles.image} />
                <View style={{ margin: 5 }}>
                    <ThemedText>{props.item.title}</ThemedText>
                    <ThemedText>{props.item["instructor.user.name"]}</ThemedText>
                    <ThemedText style={styles.darkText}>{props.item.price} VND . {props.item.videoNumber} video . {props.item.totalHours} hours </ThemedText>
                    <Rating imageSize={20} fractions="{1}" startingValue={props.item.ratedNumber} />
                </View>
            </ScreenContainer>
        </TouchableOpacity>
    )
}

export default SectionCoursesItem

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
