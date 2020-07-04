import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ScreenContainer from '../../../Common/screen-container'
import ThemedText from '../../../Common/themed-text'

const SectionCoursesItem = (props) => {
    return (
        <TouchableOpacity
            onPress={() => {
                props.navigation.navigate("CourseDetail")
            }}
        >
            <ScreenContainer style={styles.item}>
                <Image source={require('../../../../../assets/reactNative.png')} style={styles.image} />
                <View style={{ margin: 5 }}>
                    <ThemedText>{props.item.title}</ThemedText>
                    <ThemedText>{props.item.author}</ThemedText>
                    <Text style={styles.darkText}>{`${props.item.level} . ${props.item.released} . ${props.item.duration}`}</Text>
                </View>
            </ScreenContainer>
        </TouchableOpacity>
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
