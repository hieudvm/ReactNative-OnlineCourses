import React from 'react'
import { StyleSheet, View, ImageBackground, TouchableOpacity, Dimensions } from 'react-native'
import { Text } from 'react-native-elements'

const { width, height } = Dimensions.get('window');

const ImageButtonItem = (props) => {
    const randomnumber = Math.floor(Math.random() * (700 - 200 + 1)) + 200
    const Image_Http_URL = { uri: `https://picsum.photos/${randomnumber}` }

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
        width: width / 1.5,
        height: height / 6,
        margin: 6,
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
