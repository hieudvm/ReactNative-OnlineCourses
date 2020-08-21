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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <ThemedText style={{ margin: 6 }}>Courses</ThemedText>
                        <ThemedText style={{ margin: 6 }}>{props.courseTotal} results</ThemedText>
                    </View>
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
