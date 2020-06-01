import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import SectionCoursesItem from '../SectionCoursesItem/section-courses-item'

const SectionCourses = (props) => {
    const courses = [
        {
            id: 1,
            title: 'React Native',
            author: 'Hai Pham',
            level: 'Advance',
            released: 'May 12, 2020',
            duration: '38 hours'
        },
        {
            id: 2,
            title: 'Android',
            author: 'Huy Nguyen',
            level: 'Beginner',
            released: 'May 12, 2020',
            duration: '30 hours'
        },
        {
            id: 3,
            title: 'IOS',
            author: 'Huy Nguyen',
            level: 'Beginner',
            released: 'May 12, 2020',
            duration: '30 hours'
        }
    ]

    const renderListItem = (courses) => {
        return courses.map(item => <SectionCoursesItem item={item}/>);
    }

    return (
        <View>
            <View>
                <Text style={{ backgroundColor: 'lightgray', margin: 6, borderRadius: 5}}>
                    {props.title}
                </Text>
            </View>
            <ScrollView horizontal={true}>
                {renderListItem(courses)}
            </ScrollView>
        </View>
    )
}

export default SectionCourses

const styles = StyleSheet.create({})
