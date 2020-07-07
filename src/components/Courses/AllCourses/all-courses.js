import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ListCoursesItem from '../ListCoursesItem/list-courses-item'
import ScreenContainer from '../../Common/screen-container'

const AllCourses = (props) => {
    const item = props.route.params.item

    return (
        <ScreenContainer>
            <View>
                <FlatList
                    data={item}
                    renderItem={({ item }) => <ListCoursesItem navigation={props.navigation} item={item} />}
                />
            </View>
        </ScreenContainer>
    )
}

export default AllCourses

const styles = StyleSheet.create({})
