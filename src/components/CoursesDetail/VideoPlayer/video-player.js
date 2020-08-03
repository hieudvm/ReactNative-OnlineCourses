import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import ScreenContainer from '../../Common/screen-container'
import ThemedText from '../../Common/themed-text'

const VideoPlayer = (props) => {
    return (
        <ScreenContainer>
            <Image source={require('../../../../assets/video.jpg')} style={styles.image} />
            <View>
                <ThemedText style={{ fontSize: 20, marginLeft: 6 }}>{props.item.title}</ThemedText>
                <TouchableOpacity
                    style={styles.touch}
                    onPress={props.onPress}
                >
                    <Image style={styles.button} source={require('../../../../assets/senior-woman-avatar.jpg')} />
                    <View style={styles.text}>
                        <ThemedText>
                            {props.item.author}
                        </ThemedText>
                    </View>
                </TouchableOpacity>
                <Text style={styles.darkText}>{`${props.item.level} . ${props.item.released} . ${props.item.duration}`}</Text>
            </View>
        </ScreenContainer>
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
    },
    button: {
        height: 20,
        width: 20,
        marginLeft: 6,
        marginTop: 6,
        borderRadius: 10
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
