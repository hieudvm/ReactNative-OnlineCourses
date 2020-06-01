import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const SectionCoursesItem = (props) => {
    return (
        <View style = {styles.item}>
            <Image source={require('../../../../../assets/reactNative.png')} style={styles.image} />
            <View style = {{margin: 5}}>
                <Text>{props.item.title}</Text>
                <Text>{props.item.author}</Text>
                <Text style={styles.darkText}>{`${props.item.level} . ${props.item.released} . ${props.item.duration}`}</Text>
            </View>
        </View>
    )
}

export default SectionCoursesItem

const styles = StyleSheet.create({
    item: {
        margin: 6,
        height: 121,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1

    },
    image: {
        width: 120,
        height: 120
    },
    darkText: {
        color: 'gray'
    }
})
