import React from 'react'
import { StyleSheet, Text, View, SectionList } from 'react-native'
import ListLessonsItem from '../ListLessonsItem/list-lessons-item'

const ListLessons = (propss) => {

    const lessons = [
        {
            title: 'Getting started',
            data: [
                {
                    id: 1,
                    title: 'Getting started',
                    time: '1:27'
                }
            ]
        },
        {
            title: 'Course Overview',
            data: [
                {
                    id: 1,
                    title: 'Introduction',
                    time: '2:10'
                },
                {
                    id: 2,
                    title: 'Setup Enviroment',
                    time: '18:09'
                },
                {
                    id: 3,
                    title: 'Generate React Native Project & Run App On Simulators/Devices',
                    time: '12:53'
                },
                {
                    id: 4,
                    title: 'Project Walkthrough',
                    time: '9:00'
                },
                {
                    id: 5,
                    title: 'Component & JSX',
                    time: '18:46'
                },
                {
                    id: 6,
                    title: 'Props & State',
                    time: '11:33'
                },
                {
                    id: 7,
                    title: 'Style In ReactNative',
                    time: '7:37'
                }
            ]
        },
        {
            title: 'Component, Styling and Layout',
            data: [
                {
                    id: 1,
                    title: 'Component, Styling and Layout',
                    time: '2:08:36'
                },
                {
                    id: 2,
                    title: 'Using ScrollView/Image/FlatList/SectionList/Alert/Share in React Native',
                    time: '2:05:20'
                }
            ]
        },
        {
            title: 'Navigation with React Navigation',
            data: [
                {
                    id: 1,
                    title: 'Navigation with React Navigation',
                    time: '2:11:18'
                }
            ]
        },
        {
            title: 'State management and Redux',
            data: [
                {
                    id: 1,
                    title: 'React Lifecycle, React Hook and React Context',
                    time: '2:03:11'
                },
                {
                    id: 2,
                    title: 'React Lifecycle, React Hook and React Context - Part 2',
                    time: '1:40:09'
                }
            ]
        }
    ]

    return (
        <View>
            <SectionList
                    sections={lessons}
                    renderItem={({ item }) => <ListLessonsItem item={item} />}
                    renderSectionHeader={({ section: { title } }) => <View style={{ backgroundColor: '#0099CC', margin: 6 }}><Text>{title}</Text></View>}
                />
        </View>
    )
}

export default ListLessons

const styles = StyleSheet.create({})
