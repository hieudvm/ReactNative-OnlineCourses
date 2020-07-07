import React from 'react'
import { StyleSheet, Text, View, SectionList } from 'react-native'
import ListLessonsItem from '../ListLessonsItem/list-lessons-item'

const ListLessons = (props) => {

    return (
        <View>
            <SectionList
                    sections={props.item.content}
                    renderItem={({ item }) => <ListLessonsItem item={item} />}
                    renderSectionHeader={({ section: { detail } }) => <View style={{ backgroundColor: '#0099CC', margin: 6 }}><Text>{detail}</Text></View>}
                />
        </View>
    )
}

export default ListLessons

const styles = StyleSheet.create({})
