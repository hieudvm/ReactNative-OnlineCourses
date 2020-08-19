import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import ScreenContainer from '../../Common/screen-container'
import ThemedText from '../../Common/themed-text'
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import CourseExcerciseItemDetail from './course-excercise-item-detail';

const CourseExcerciseItem = (props) => {
    console.log("lessonId", props.item.lesson)

    return (
        <FlatList
            data={props.item.lesson}
            renderItem={({ item }) => (
                <CourseExcerciseItemDetail
                    navigation={props.navigation}
                    item={item}
                />
            )}
        />

    )
}

export default CourseExcerciseItem

const styles = StyleSheet.create({
    item: {
        margin: 6,
        height: 120,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 20,
    },
    darkText: {
        color: 'darkgray'
    }
})
