import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ScreenContainer from '../../../Common/screen-container'
import ThemedText from '../../../Common/themed-text'
import { CourseDetailContext } from '../../../../provider/courseDetail-provider'
import { CoursesContext } from '../../../../provider/courses-provider'
import { AuthorContext } from '../../../../provider/author-provider'

const SectionCoursesLearning = (props) => {
    const courseDetailContext = useContext(CourseDetailContext)
    const coursesContext = useContext(CoursesContext)
    const authorContext = useContext(AuthorContext)
    
    const Image_Http_URL = { uri: props.item.courseImage }
    return (
        <TouchableOpacity
            onPress={() => {
                authorContext.getInstructorById(props.item.instructorId)
                coursesContext.getCourseInformation(props.item.id)
                courseDetailContext.getCourseDetailWithLession(props.item.id)
                props.navigation.push("CourseDetail", { item: props.item })
            }}
        >
            <ScreenContainer style={styles.item}>
                <Image source={Image_Http_URL} style={styles.image} />
                <View style={{ margin: 5 }}>
                    <ThemedText>{props.item.courseTitle}</ThemedText>
                    <ThemedText>{props.item.instructorName}</ThemedText>
                    <ThemedText style={styles.darkText}>{props.item.latestLearnTime} </ThemedText>
                </View>
            </ScreenContainer>
        </TouchableOpacity>
    )
}

export default SectionCoursesLearning

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
