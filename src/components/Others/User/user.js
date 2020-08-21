import React, { useContext, useEffect } from 'react'
import { StyleSheet, Image, View, Text, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import ThemedText from '../../Common/themed-text'
import { UserContext } from '../../../provider/user-provider';
import ScreenContainer from '../../Common/screen-container';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window')
const User = (props) => {
    const userContext = useContext(UserContext)
    const Image_Http_URL = { uri: userContext.state.userInformation.avatar }

    useEffect(() => {
        userContext.getUserInformation()
    }, [])

    return (
        <ScreenContainer style={styles.container}>
            <Image style={styles.image} source={Image_Http_URL} />
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
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    props.navigation.navigate("ChangePassword")
                }}
            >
                <Text style={styles.text}>Change password</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    props.navigation.navigate("UpdateProfile", { email: userContext.state.userInformation.email })
                }}
            >
                <Text style={styles.text}>Update your profile</Text>
            </TouchableOpacity>
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

export default User

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: width/5,
        height: height/5,
        marginBottom: 10
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
