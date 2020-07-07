import React from 'react'
import { StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'

const ImageButtonItem = (props) => {
    const randomnumber = Math.floor(Math.random() * (700 - 200 + 1)) + 200
    Image_Http_URL = { uri: `https://picsum.photos/${randomnumber}` }

    return (
        <TouchableOpacity
            style={styles.touch}
            onPress={() => {
                props.navigation.navigate("BrowseDetail", { item: props.item })
            }}
        >
            <ImageBackground style={styles.button} source={Image_Http_URL}>
                <Text h5 style={styles.text}>
                    {props.item}
                </Text>
            </ImageBackground>
        </TouchableOpacity>

    )
}

export default ImageButtonItem

const styles = StyleSheet.create({
    button: {
        height: 100,
        width: 250,
        margin: 5,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
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
