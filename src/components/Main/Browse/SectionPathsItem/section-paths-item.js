import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'

const SectionPathsItem = (props) => {
    return (
        <View>
            <ImageBackground style={styles.button} source={require('../../../../../assets/background2.jpg')}>
            <TouchableOpacity 
            style={styles.touch}
            onPress={props.onPress}
            >
            </TouchableOpacity>
        </ImageBackground>
            <TouchableOpacity 
            style={styles.button}
            onPress={props.onPress}
            >
                <Text style={styles.text}>
                    {props.title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SectionPathsItem

const styles = StyleSheet.create({
    button: {
        height: 100,
        width: 250,
        marginLeft: 5,
        marginRight: 5,
        flex: 2
    },
    touch: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',

    },
    text: {
        height: 200,
        width: 250,
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'gray',
        flex: 2,
        justifyContent: 'center',
        alignContent: 'center',
    }
})
