import React, { useContext } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Text } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ScreenContainer from '../Common/screen-container'
import { AuthenticationContext } from '../../provider/authentication-provider'

const Welcome = (props) => {
    return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../../assets/Logo.jpg')} />
                <Text h3 >Welcome to E-learning.IO</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        props.navigation.navigate("Login")
                    }}
                >
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        props.navigation.navigate("Register")
                    }}
                >
                    <Text style={styles.text}>Register</Text>
                </TouchableOpacity>
            </View>
    )
}

export default Welcome

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
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 50,
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 20,
        backgroundColor: 'darkgray',
        marginTop: 20
    },
    text: {
        color: 'white',
    }
})
