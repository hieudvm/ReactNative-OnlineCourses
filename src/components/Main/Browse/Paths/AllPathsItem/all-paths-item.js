import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import PathsItem from '../PathsItem/paths-item'
import ScreenContainer from '../../../../Common/screen-container'

const AllPathsItem = (props) => {
    const data = [
        {
            id: 1,
            title: 'Angular Denver 2019',
            numOfCourses: '44 course',
            duration: '15 hours'
        },
        {
            id: 2,
            title: 'Big Data LDN 2019',
            numOfCourses: '101 course',
            duration: '42 hours'
        },
        {
            id: 3,
            title: 'BSides Huntsville 2020',
            numOfCourses: '8 course',
            duration: '6 hours'
        },
        {
            id: 4,
            title: 'BSide Jacksonville 2019',
            numOfCourses: '16 course',
            duration: '11 hours'
        },
        {
            id: 5,
            title: 'CodeMash Conference 2020',
            numOfCourses: '94 course',
            duration: '76 hours'
        },
        {
            id: 6,
            title: 'COVID-19: The State & Future of Pandemics',
            numOfCourses: '21 course',
            duration: '14 hours'
        },
        {
            id: 7,
            title: 'DEVintersection 2019',
            numOfCourses: '20 course',
            duration: '18 hours'
        },
        {
            id: 8,
            title: 'Droidcon Boston 2019',
            numOfCourses: '32 course',
            duration: '19 hours'
        },
        {
            id: 9,
            title: 'Front UX & Product Management Case Study Conference 2019',
            numOfCourses: '13 course',
            duration: '7 hours'
        },
        {
            id: 10,
            title: 'Mirosoft Azure + AI Conference 2019',
            numOfCourses: '20 course',
            duration: '19 hours'
        }
    ]
    return (
        <ScreenContainer>
            <FlatList 
                data = {data}
                renderItem={({item}) => <PathsItem item={item} />}
            />
        </ScreenContainer>
    )
}

export default AllPathsItem

const styles = StyleSheet.create({})
