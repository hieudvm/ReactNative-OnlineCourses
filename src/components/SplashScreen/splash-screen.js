import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const SplashScreen = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../assets/Logo.jpg')} />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 200,
        height: 200
    }
})
