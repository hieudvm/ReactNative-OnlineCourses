import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const ListCoursesItem = (props) => {
    return (
        <TouchableOpacity style={styles.item}
            onPress={() =>{
                props.navigation.navigate("CourseDetail")
            }}
        >
            <Image source = {require('../../../../assets/Android.jpg')} style={styles.image} />
            <View style = {{margin: 10}}>
                <Text>{props.item.title}</Text>
                <Text>{props.item.author}</Text>
                <Text style={styles.darkText}>{`${props.item.level} . ${props.item.released} . ${props.item.duration}`}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ListCoursesItem

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
        borderRadius: 5,
    },
    darkText: {
        color: 'darkgray'
    }
})
