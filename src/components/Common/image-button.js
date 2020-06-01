import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'

const ImageButton = (props) => {
    return (
        <ImageBackground style={styles.button} source={require('../../../assets/background.jpg')}>
            <TouchableOpacity 
            style={styles.touch}
            onPress={props.onPress}
            >
                <Text style={styles.text}>
                    {props.title}
                </Text>
            </TouchableOpacity>

        </ImageBackground>
    )
}

export default ImageButton

const styles = StyleSheet.create({
    button: {
        height: 100,
        margin: 6
    },
    touch: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',

    },
    text: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
