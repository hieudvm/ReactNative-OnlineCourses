import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const ListLessonsItem = (props) => {
    return (
        <TouchableOpacity style={styles.item}
            onPress={() =>{
            }}
        >
            <Image source = {require('../../../../assets/reactNative.png')} style={styles.image} />
            <View style = {{margin: 10}}>
                <Text>{props.item.title}</Text>
                <Text style={styles.darkText}>{`${props.item.time}`}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ListLessonsItem

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
