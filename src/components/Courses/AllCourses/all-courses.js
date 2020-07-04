import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ListCoursesItem from '../ListCoursesItem/list-courses-item'
import ScreenContainer from '../../Common/screen-container'

const AllCourses = (props) => {

    const data = [
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
        },
        {
            id: 4,
            title: 'React',
            author: 'Hai Pham',
            level: 'Advance',
            released: 'May 12, 2020',
            duration: '38 hours'
        },
        {
            id: 5,
            title: 'Vue',
            author: 'Huy Nguyen',
            level: 'Beginner',
            released: 'May 12, 2020',
            duration: '30 hours'
        },
        {
            id: 6,
            title: 'Nuxt',
            author: 'Huy Nguyen',
            level: 'Beginner',
            released: 'May 12, 2020',
            duration: '30 hours'
        },
        {
            id: 7,
            title: 'Java Developer',
            author: 'Hai Pham',
            level: 'Advance',
            released: 'May 12, 2020',
            duration: '38 hours'
        },
        {
            id: 8,
            title: 'Python',
            author: 'Huy Nguyen',
            level: 'Beginner',
            released: 'May 12, 2020',
            duration: '30 hours'
        },
        {
            id: 9,
            title: 'Angular',
            author: 'Huy Nguyen',
            level: 'Intermediate',
            released: 'May 12, 2020',
            duration: '30 hours'
        }
    ]

    return (
        <ScreenContainer>
            <View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <ListCoursesItem navigation={props.navigation} item={item} />}
                />
            </View>
        </ScreenContainer>
    )
}

export default AllCourses

const styles = StyleSheet.create({})
