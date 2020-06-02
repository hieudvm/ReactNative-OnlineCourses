import React from 'react'
import { StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'

const ImageButtonItem = (props) => {
    return (
        <ImageBackground style={styles.button} source={require('../../../assets/codingBackground3.jpg')}>
            <TouchableOpacity 
            style={styles.touch}
            onPress={props.onPress}
            >
                <Text h5 style={styles.text}>
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
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    }
})
