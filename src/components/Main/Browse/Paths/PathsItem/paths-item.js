import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const PathsItem = (props) => {
    return (
        <View>
            <TouchableOpacity style={styles.item}
            onPress={() =>{
            }}
        >
            <Image source = {require('../../../../../../assets/Ios.jpg')} style={styles.image} />
            <View style = {{margin: 10}}>
                <Text>{props.item.title}</Text>
                <Text style={styles.darkText}>{`${props.item.numOfCourses} . ${props.item.duration}`}</Text>
            </View>
        </TouchableOpacity>
        </View>
    )
}

export default PathsItem

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
