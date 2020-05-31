import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'

const VideoPlayer = (props) => {
    return (
        <View style={{flex: 1}}>
            <Image source={require('../../../../assets/video.jpg')} style={styles.image} />
            <Text style={{fontSize: 20, margin: 6}}>{props.title}</Text>
            <View style={{ margin: 6, flex : -3, flexDirection: 'row'}}>
                <ImageBackground style={styles.button} source={require('../../../../assets/senior-woman-avatar.jpg')}>
                    <TouchableOpacity
                        style={styles.touch}
                        onPress={props.onPress}
                    >
                    </TouchableOpacity>
                </ImageBackground>
                <View>
                    <Text style={styles.text}>
                        {props.author}
                    </Text>
                </View>
                
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
        height: 30,
        width: 30,
        margin: 5
    },
    touch: {
        justifyContent: 'center',
        alignContent: 'center',

    },
    text: {
        fontSize: 13,
        fontFamily: 'Roboto',
        color: 'black',
        paddingHorizontal: 'auto'
    }
})
