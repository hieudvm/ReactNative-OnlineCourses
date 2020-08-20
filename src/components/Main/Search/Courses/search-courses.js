import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ScreenContainer from '../../../Common/screen-container'
import { ScrollView, FlatList } from 'react-native-gesture-handler'
import ThemedText from '../../../Common/themed-text'
import ListCoursesItem from '../../../Courses/ListCoursesItem/list-courses-item'

const SearchCourses = (props) => {
    return (
        <ScreenContainer>
            <ScrollView>
                <View >
                    <ThemedText style={{ margin: 6 }}>Courses</ThemedText>
                    <FlatList
                        data={props.course}
                        renderItem={({ item }) => <ListCoursesItem navigation={props.navigation} item={item} />}
                    />
                </View>
            </ScrollView>
        </ScreenContainer>
    )
}

export default SearchCourses

const styles = StyleSheet.create({})
