import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, SectionList } from 'react-native'
import ListLessonsItem from '../ListLessonsItem/list-lessons-item'
import { CourseDetailContext } from '../../../provider/courseDetail-provider'

const ListLessons = (props) => {
    const courseDetailContext = useContext(CourseDetailContext)

    const [sections, setSections] = useState([])

    useEffect(() => {
        if (courseDetailContext.state.sectionLesson.section) {
            setSections(courseDetailContext.state.sectionLesson.section)
        }
    }, [courseDetailContext.state.sectionLesson])

    // const courseLesson = courseDetailContext.state.sectionLesson.section

    console.log("course Detail", sections)

    const detail = [
        {
            detail: 'Keynote talk',
            time: '40m 42s',
            data: [
                {
                    title: 'Keynote talk',
                    time: '40m 42s'
                }
            ]
        }
    ]

    return (
        <View>
            <SectionList
                sections={[{ title: 'dasd', data: sections }]}
                renderItem={({ item }) => <ListLessonsItem item={item} />}
                renderSectionHeader={({ section: { name } }) => <View style={{ backgroundColor: '#0099CC', margin: 6 }}><Text>{name}</Text></View>}
            />
        </View>
    )
}

export default ListLessons

const styles = StyleSheet.create({})
