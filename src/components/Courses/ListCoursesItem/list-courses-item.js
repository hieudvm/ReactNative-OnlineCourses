import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import ScreenContainer from '../../Common/screen-container'
import ThemedText from '../../Common/themed-text'

const ListCoursesItem = (props) => {
    const randomnumber = Math.floor(Math.random() * (700 - 200 + 1)) + 200
    Image_Http_URL = { uri: `https://picsum.photos/${randomnumber}` }
    return (
        <ScreenContainer>
            <TouchableOpacity style={styles.item}
                onPress={() => {
                    props.navigation.navigate("CourseDetail", {item: props.item})
                }}
            >
                <Image source={Image_Http_URL} style={styles.image} />
                <ScreenContainer>
                    <View style={{margin: 6}}>
                        <ThemedText>{props.item.title}</ThemedText>
                        <ThemedText>{props.item.author}</ThemedText>
                        <ThemedText style={styles.darkText}>{`${props.item.level} . ${props.item.released} . ${props.item.duration}`}</ThemedText>
                    </View>
                </ScreenContainer>
            </TouchableOpacity>
        </ScreenContainer>
    )
}

export default ListCoursesItem

const styles = StyleSheet.create({
    item: {
        margin: 6,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 0
    },
    darkText: {
        color: 'darkgray'
    }
})
