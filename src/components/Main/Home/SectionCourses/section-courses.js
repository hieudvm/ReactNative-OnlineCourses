import React, { useContext } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import SectionCoursesItem from '../SectionCoursesItem/section-courses-item'
import Icon from 'react-native-vector-icons/FontAwesome';
import ThemedText from '../../../Common/themed-text';
import { CoursesContext } from '../../../../provider/courses-provider';

const SectionCourses = (props) => {
    const courseContext = useContext(CoursesContext)

    const renderListItem = (courses) => {
        return courses.map(item => <SectionCoursesItem navigation={props.navigation} item={item} />);
    }

    const renderListItemCondition = () => {
        if (props.title === 'Software development') {
            const courses1 = courseContext.courses.slice(0,7)
            return renderListItem(courses1)
        } else if (props.title === 'IT operations') {
            const course2 = courseContext.courses.slice(7,14)
            return renderListItem(course2)
        } else if (props.title === 'Data professional') {
            const course3 = courseContext.courses.slice(14,22)
            return renderListItem(course3)
        }  else if (props.title === 'Countinue learning') {
            const courseTemp = []
            const course4 = Array.from(courseContext.learningCourseIds)
            for(const x of courseContext.learningCourseIds) {
                courseTemp.push(courseContext.courses[x-1])
            }
            if (course4.length === 0) {
                return
            } else {
                return renderListItem(courseTemp)
            }
        }
    }

    return (
        <View>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'stretch' }}>
                    <ThemedText style={{ margin: 6, flex: 1 }}>
                        {props.title}
                    </ThemedText>
                    <View style={{ backgroundColor: 'lightgray', marginRight: 6, paddingHorizontal: 10, borderRadius: 10 }}>
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.navigate("AllCourses", {item: courseContext.courses})
                            }}
                            style={{ flexDirection: 'row', alignItems: 'center' }}
                        >
                            <Text style={{ marginRight: 6 }}>
                                See all
                    </Text>
                            <Icon name="angle-right" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView horizontal={true}>
                {renderListItemCondition()}
            </ScrollView>
        </View>
    )
}

export default SectionCourses

const styles = StyleSheet.create({})
