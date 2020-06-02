import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'


const SectionAuthorsItem = (props) => {
    return (
        <View>
            <TouchableOpacity
                style={styles.touch}
                onPress={props.onPress}
            >
                <Image style={styles.image} source={require('../../../../../assets/senior-woman-avatar.jpg')} />
                <View style={styles.text}>
                <Text h5>
                    {props.title}
                </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default SectionAuthorsItem

const styles = StyleSheet.create({
    image: {
        height: 90,
        width: 90,
        margin: 5,
        flex: 2
    },
    touch: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',

    },
    text: {
        flex: 2,
        color: 'black',
        textAlign: 'center',
        margin: 6,
        marginTop: 0,
        paddingHorizontal: 10
    }
})
