import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ScreenContainer from '../../../Common/screen-container'
import ThemedText from '../../../Common/themed-text'
import { CoursesContext } from '../../../../provider/courses-provider'
import { Rating, AirbnbRating } from 'react-native-elements';

const SectionCoursesItem = (props) => {
    const courseContext = useContext(CoursesContext)
    const Image_Http_URL = { uri: props.item.imageUrl }
    const author = 'instructor.user.name'
    const data = {
        author: props.item.author
    }
    return (
        <TouchableOpacity
            onPress={() => {
                courseContext.addLearningCourse(props.item.id)
                props.navigation.push("CourseDetail", { item: props.item.id })
            }}
        >
            <ScreenContainer style={styles.item}>
                <Image source={Image_Http_URL} style={styles.image} />
                <View style={{ margin: 5 }}>
                    <ThemedText>{props.item.title}</ThemedText>
                    <ThemedText>{props.item["instructor.user.name"]}</ThemedText>
                    <Text style={styles.darkText}>{props.item.price} VND . {props.item.videoNumber} video . {props.item.totalHours} hours </Text>
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
