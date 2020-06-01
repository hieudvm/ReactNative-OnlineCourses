import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

const VideoPlayer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <Image source={require('../../../../assets/video.jpg')} style={styles.image} />
            <Text style={{ fontSize: 20, margin: 6 }}>{props.title}</Text>
            <View style={{ flex: -3}}>
                <TouchableOpacity
                    style={styles.touch}
                    onPress={props.onPress}
                >
                    <ImageBackground style={styles.button} source={require('../../../../assets/senior-woman-avatar.jpg')}>
                    </ImageBackground>
                    <View style={{justifyContent: 'center'}}>
                        <Text style={styles.text}>
                            {props.author}
                        </Text>
                    </View>
                </TouchableOpacity>


            </View>
            <Text style={styles.darkText}>{`${props.level} . ${props.released} . ${props.duration}`}</Text>
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
        flex: -1,
        borderRadius: 5,
    },
    darkText: {
        color: 'gray',
        margin: 6
    },
    button: {
        height: 20,
        width: 20,
        margin: 5
    },
    touch: {
        alignContent: 'center',
        flexDirection: 'row',
        marginBottom: 10 

    },
    text: {
        fontSize: 13,
        fontFamily: 'Roboto',
        color: 'black',
        paddingHorizontal: 'auto'
    }
})
