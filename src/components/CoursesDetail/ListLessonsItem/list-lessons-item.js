import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import ScreenContainer from '../../Common/screen-container'
import ThemedText from '../../Common/themed-text'
import { VideoContext } from '../../../provider/video-provider'
import Icon from 'react-native-vector-icons/FontAwesome';

const ListLessonsItem = (props) => {
    const videoContext = useContext(VideoContext)
    return (
        <TouchableOpacity style={styles.item}
            onPress={() => {
                videoContext.setVideoUrl(props.item.videoUrl)
            }}
        >
            <Image source={require('../../../../assets/reactNative.png')} style={styles.image} />
            <ScreenContainer>
                <View style={{ margin: 10 }}>
                    <ThemedText>{props.item.name}</ThemedText>
                    <ThemedText style={styles.darkText}>{`${props.item.hours}`}</ThemedText>
                </View>
            </ScreenContainer>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.push("CourseExcercise", { item: props.course })
                }}
            >
                <View style={styles.iconItem}>
                    <View style={{ backgroundColor: 'gray', width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                        <Icon
                            name='file-word-o' size={30} />
                    </View>
                    <ThemedText>Excercise</ThemedText>
                </View>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default ListLessonsItem

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
        width: 100,
        height: 100,
        borderRadius: 20,
    },
    darkText: {
        color: 'darkgray'
    },
    icon: {
        margin: 6,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    iconItem: {
        alignItems: 'center',
        margin: 6
    }
})
