import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Icon } from 'react-native-elements'
import ScreenContainer from '../../Common/screen-container'
import ThemedText from '../../Common/themed-text'
import { AuthorContext } from '../../../provider/author-provider'
import { CoursesContext } from '../../../provider/courses-provider'

const VideoPlayer = (props) => {
    const authorContext = useContext(AuthorContext)
    const coursesContext = useContext(CoursesContext)

    const authorId = props.item.instructorId
    return (
        <ScreenContainer>
            <Image source={require('../../../../assets/video.jpg')} style={styles.image} />
            <View>
            {coursesContext.state.isLoading && <ActivityIndicator size="small" color="gray" />}
                <ThemedText style={{ fontSize: 20, marginLeft: 6 }}>{props.item.title}</ThemedText>
                <TouchableOpacity
                    style={styles.touch}
                    onPress={() => {
                        props.navigation.push("AuthorDetail", { item: authorId })
                    }}
                >
                    <Image style={styles.button} source={require('../../../../assets/senior-woman-avatar.jpg')} />
                    <View style={styles.text}>
                    {authorContext.state.isLoading && <ActivityIndicator size="small" color="gray" />}
                        <ThemedText>
                            {props.author}
                        </ThemedText>
                    </View>
                </TouchableOpacity>
                {coursesContext.state.isLoading && <ActivityIndicator size="small" color="gray" />}
                <Text style={styles.darkText}>{props.item.price} VND . {props.item.videoNumber} video . {props.item.totalHours} hours </Text>
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
        height: 200,
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
