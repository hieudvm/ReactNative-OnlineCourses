import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import ScreenContainer from '../../../../Common/screen-container'
import ThemedText from '../../../../Common/themed-text'

const PathsItem = (props) => {
    return (
        <ScreenContainer style={styles.item}>
            <TouchableOpacity style ={{flexDirection: 'row'}}
            onPress={() =>{
            }}
        >
            <Image source = {require('../../../../../../assets/Ios.jpg')} style={styles.image} />
            <View style = {{margin: 10}}>
                <ThemedText>{props.item.title}</ThemedText>
                <ThemedText style={styles.darkText}>{`${props.item.numOfCourses} . ${props.item.duration}`}</ThemedText>
            </View>
        </TouchableOpacity>
        </ScreenContainer>
    )
}

export default PathsItem

const styles = StyleSheet.create({
    item: {
        margin: 6,
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
