import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import ScreenContainer from '../../Common/screen-container'
import ThemedText from '../../Common/themed-text'

const ListCoursesItem = (props) => {
    return (
        <ScreenContainer>
            <TouchableOpacity style={styles.item}
                onPress={() => {
                    props.navigation.navigate("CourseDetail")
                }}
            >
                <Image source={require('../../../../assets/Android.jpg')} style={styles.image} />
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
