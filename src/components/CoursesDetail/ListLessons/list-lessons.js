import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, SectionList, ActivityIndicator } from 'react-native'
import ListLessonsItem from '../ListLessonsItem/list-lessons-item'
import { CourseDetailContext } from '../../../provider/courseDetail-provider'
import { FlatList } from 'react-native-gesture-handler'
import { useFocusEffect } from '@react-navigation/native'

const item = [
    {
        detail: '',
        time: '',
        data: [
            {
                name: '',
                hours: ''
            }
        ]
    }
]
const ListLessons = (props) => {
    const courseDetailContext = useContext(CourseDetailContext)
    const [sections, setSections] = useState([])

    useFocusEffect(
        React.useCallback(() => {
            if (courseDetailContext.state.sectionLesson.section) {
                setSections(courseDetailContext.state.sectionLesson.section)
            }
        }, [courseDetailContext.state.sectionLesson])
    );

    if (courseDetailContext.state.isLoading) {
        return (
            <View>
                <SectionList
                    sections={item}
                    renderItem={({ item }) => <ListLessonsItem navigation={props.navigation} item={item} />}
                    renderSectionHeader={({ section : {detail} }) => <View style={{ backgroundColor: '#0099CC', margin: 6 }}><Text>{detail}</Text></View>}
                />
            </View> 
        )
    } else {
        return (
            <View style={{marginTop: 10}}>
                {courseDetailContext.state.isLoading && <ActivityIndicator size="small" color="gray" />}
                <SectionList
                    sections={[{data: sections }]}
                    renderItem={({ item }) => <FlatList data={item.lesson} renderItem={({ item }) => <ListLessonsItem navigation={props.navigation} item={item} course={courseDetailContext.state.sectionLesson} />}/>}
                    // renderSectionHeader={({ section }) => <View style={{ backgroundColor: '#0099CC', margin: 6 }}><Text>{section.data[0].name}</Text></View>}
                />
            </View> 
        )
    }

    
}

export default ListLessons

const styles = StyleSheet.create({})
