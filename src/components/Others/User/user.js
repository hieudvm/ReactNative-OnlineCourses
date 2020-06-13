import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

const User = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/User.jpg')} />
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
