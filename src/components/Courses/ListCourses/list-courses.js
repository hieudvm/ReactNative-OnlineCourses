import React from 'react'
import { StyleSheet, Text, View, FlatList, TextInput, Button, SectionList } from 'react-native'
import ListCoursesItem from "../ListCoursesItem/list-courses-item";

const ListCourses = (props) => {
    const courses = [
        {
            title: 'Mobile',
            data: [
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
        },
        {
            title: 'Web',
            data: [
                {
                    id: 1,
                    title: 'React',
                    author: 'Hai Pham',
                    level: 'Advance',
                    released: 'May 12, 2020',
                    duration: '38 hours'
                },
                {
                    id: 2,
                    title: 'Vue',
                    author: 'Huy Nguyen',
                    level: 'Beginner',
                    released: 'May 12, 2020',
                    duration: '30 hours'
                },
                {
                    id: 3,
                    title: 'Nuxt',
                    author: 'Huy Nguyen',
                    level: 'Beginner',
                    released: 'May 12, 2020',
                    duration: '30 hours'
                }
            ]
        }
    ]

    const searchView = () => {
        return <View style={{ flexDirection: 'row', margin: 10 }}>
            <TextInput style={{ flex: 1, borderColor: 'gray', borderWidth: 1, padding: 5 }} placeholder='Search text' />
            <Button onPress={() => { console.log('Search') }} title='Search' style={{ width: 60, height: 40 }} />
        </View>
    }

    return (
        <View style={{flex: 1}}>
            <View style={{ flexDirection: 'row', margin: 6, flex: -1}}>
                <TextInput style={{ flex: 1, borderColor: 'gray', borderWidth: 1, padding: 5 }} placeholder='Search text' />
                <Button onPress={() => { console.log('Search') }} title='Search' style={{ width: 60, height: 40 }} />
            </View>
            <View style={{flex: -3}}>
                <SectionList
                    sections={courses}
                    renderItem={({ item }) => <ListCoursesItem navigation={props.navigation} item={item} />}
                    renderSectionHeader={({ section: { title } }) => <View style={{ backgroundColor: 'white', margin: 10 }}><Text >{title}</Text></View>}
                />
            </View>
        </View>
    )
}

export default ListCourses

const styles = StyleSheet.create({})
