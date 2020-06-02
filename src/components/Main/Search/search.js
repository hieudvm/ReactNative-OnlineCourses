import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import ListCourses from '../../Courses/ListCourses/list-courses'

const Search = (props) => {
    return (
        <View style={{flex: 1}}>
            <View style={{ flexDirection: 'row', margin: 6, flex: -1}}>
                <TextInput style={{ flex: 1, borderColor: 'gray', borderWidth: 1, padding: 5 }} placeholder='Search text' />
                <Button onPress={() => { console.log('Search') }} title='Search' style={{ width: 60, height: 40 }} />
            </View>
            <ListCourses navigation={props.navigation} />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})
