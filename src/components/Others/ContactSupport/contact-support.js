import React, { useContext, useEffect } from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import ScreenContainer from '../../Common/screen-container';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ContactSupport = (props) => {
    return (
        <ScreenContainer style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/Logo.jpg')} />
            <View style={styles.layout}>
                <Icon style={styles.icon} name='envelope-open' size={20} />
                <Text style={styles.text}>duonghieu121097@gmail.com</Text>
            </View>
            <View style={styles.layout}>
                <Icon style={styles.icon} name='address-book' size={20} />
                <Text style={styles.text}>Dương Văn Minh Hiếu</Text>
            </View>
            <View style={styles.layout}>
                <Icon style={styles.icon} name='phone' size={20} />
                <Text style={styles.text}>0382817233</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    props.navigation.navigate("Home")
                }}
            >
                <Text style={styles.text}>Back to Home page</Text>
            </TouchableOpacity>
        </ScreenContainer>
    )
}

export default ContactSupport

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20
    },
    layout: {
        width: 350,
        height: 50,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 3,
        margin: 10,
        padding: 10,
        backgroundColor: 'gray',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        marginHorizontal: 50,
        color: 'white',
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
        marginBottom: 10
    }
})
