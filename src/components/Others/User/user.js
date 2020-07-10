import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { ThemeContext } from 'react-native-elements'
import ThemedText from '../../Common/themed-text'

const User = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/User.jpg')} />
            <ThemedText>Administrator</ThemedText>
        </View>
    )
}

export default User

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
