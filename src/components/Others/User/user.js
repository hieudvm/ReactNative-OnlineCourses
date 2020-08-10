import React, { useContext, useEffect } from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import ThemedText from '../../Common/themed-text'
import { UserContext } from '../../../provider/user-provider';

const User = (props) => {
    const userContext = useContext(UserContext)
    const Image_Http_URL = { uri: userContext.state.userInformation.avatar }

    useEffect(() => {
        userContext.getUserInformation()
    }, [])

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/User.jpg')} />
            <View style={styles.layout}>
                <Icon style={styles.icon} name='envelope-open' size={20} />
                <Text style={styles.text}>{userContext.state.userInformation.email}</Text>
            </View>
            <View style={styles.layout}>
                <Icon style={styles.icon} name='address-book' size={20} />
                <Text style={styles.text}>{userContext.state.userInformation.name}</Text>
            </View>
            <View style={styles.layout}>
                <Icon style={styles.icon} name='phone' size={20} />
                <Text style={styles.text}>{userContext.state.userInformation.phone}</Text>
            </View>
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
        width: 100,
        height: 100
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
        justifyContent: 'center',
        flexDirection: 'row'
    },
    text: {
        marginHorizontal: 50
    }
})
