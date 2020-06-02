import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

const VideoPlayer = (props) => {
    return (
        <View>
            <Image source={require('../../../../assets/video.jpg')} style={styles.image} />
            <View>
                <Text style={{ fontSize: 20, marginLeft: 6 }}>{props.title}</Text>
                <TouchableOpacity
                    style={styles.touch}
                    onPress={props.onPress}
                >
                    <Image style={styles.button} source={require('../../../../assets/senior-woman-avatar.jpg')} />
                    <View style={styles.text}>
                        <Text>
                            {props.author}
                        </Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.darkText}>{`${props.level} . ${props.released} . ${props.duration}`}</Text>
            </View>
        </View>
    )
}

export default VideoPlayer

const styles = StyleSheet.create({
    item: {
        margin: 6,
        height: 120,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    image: {
        width: 'auto',
        height: 250,
        borderRadius: 5,
    },
    button: {
        height: 20,
        width: 20,
        marginLeft: 6,
        marginTop: 6
    },
    touch: {
        alignContent: 'center',
        flexDirection: 'row'

    },
    text: {
        fontSize: 13,
        fontFamily: 'Roboto',
        color: 'black',
        paddingHorizontal: 'auto',
        marginLeft: 6,
        marginTop: 6
    },
    darkText: {
        marginLeft: 6,
        paddingLeft: 28,
        color: 'darkgray'
    }
})
