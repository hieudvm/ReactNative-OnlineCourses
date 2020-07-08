import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import ScreenContainer from '../../../../Common/screen-container'
import ThemedText from '../../../../Common/themed-text'

const PathsItem = (props) => {
    const randomnumber = Math.floor(Math.random() * (700 - 200 + 1)) + 200
    Image_Http_URL = { uri: `https://picsum.photos/${randomnumber}` }
    return (
        <ScreenContainer style={styles.item}>
            <TouchableOpacity style ={{flexDirection: 'row'}}
            onPress={() =>{
                props.navigation.navigate("AllCourses", {item: props.item.listCourses})
            }}
        >
            <Image source = {Image_Http_URL} style={styles.image} />
            <View style = {{margin: 10}}>
                <ThemedText>{props.item.title}</ThemedText>
                <ThemedText style={styles.darkText}>{`${props.item.countCourses} . ${props.item.duration}`}</ThemedText>
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
