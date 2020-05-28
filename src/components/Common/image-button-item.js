import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'

const ImageButtonItem = (props) => {
    return (
        <ImageBackground style={styles.button} source={require('../../../assets/background1.jpg')}>
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

export default ImageButtonItem

const styles = StyleSheet.create({
    button: {
        height: 100,
        width: 250,
        margin: 5,
        borderRadius: 50
    },
    touch: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',

    },
    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    }
})
