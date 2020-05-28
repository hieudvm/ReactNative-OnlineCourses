import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'

const SectionAuthorsItem = (props) => {
    return (
        <View>
            <ImageBackground style={styles.button} source={require('../../../../../assets/senior-woman-avatar.jpg')}>
            <TouchableOpacity 
            style={styles.touch}
            onPress={props.onPress}
            >
            </TouchableOpacity>
        </ImageBackground>
        <View>
        <Text style={styles.text}>
                    {props.title}
                </Text>
        </View>
        </View>
    )
}

export default SectionAuthorsItem

const styles = StyleSheet.create({
    button: {
        height: 100,
        width: 100,
        margin: 5
    },
    touch: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',

    },
    text: {
        fontSize: 20,
        fontFamily: 'Roboto',
        color: 'black',
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    }
})
