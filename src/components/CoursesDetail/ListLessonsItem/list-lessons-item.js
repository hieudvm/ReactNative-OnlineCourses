import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import ScreenContainer from '../../Common/screen-container'
import ThemedText from '../../Common/themed-text'

const ListLessonsItem = (props) => {
    return (
        <TouchableOpacity style={styles.item}
            onPress={() => {
            }}
        >
            <Image source={require('../../../../assets/reactNative.png')} style={styles.image} />
            <ScreenContainer>
                <View style={{ margin: 10 }}>
                    <ThemedText>{props.item.title}</ThemedText>
                    <ThemedText style={styles.darkText}>{`${props.item.time}`}</ThemedText>
                </View>
            </ScreenContainer>
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
        borderRadius: 20,
    },
    darkText: {
        color: 'darkgray'
    }
})
