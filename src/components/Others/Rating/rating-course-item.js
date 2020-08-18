import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import ScreenContainer from '../../../components/Common/screen-container'
import ThemedText from '../../../components/Common/themed-text'
import { Rating } from 'react-native-elements';

const RatingCourseItem = (props) => {
    const Image_Http_URL = { uri: props.item.user.avatar }
    return (
        <ScreenContainer style={styles.item} >
            <View style={{ width: 120}}>
                <Image style={styles.image} source={Image_Http_URL} />
                <View style={styles.text}>
                    <ThemedText>
                        {props.item.user.name}
                    </ThemedText>
                </View>
            </View>
            <View style={{ margin: 10, paddingRight: 10, width: 340}}>
                <Rating imageSize={20} fractions="{1}" startingValue={props.item.averagePoint} />
                <ThemedText>{props.item.content}</ThemedText>
            </View>
        </ScreenContainer>
    )
}

export default RatingCourseItem

const styles = StyleSheet.create({
    item: {
        margin: 6,
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        alignItems: 'center',
    },
    darkText: {
        color: 'darkgray'
    },
    text: {
        flex: 2,
        color: 'black',
        textAlign: 'center',
        margin: 6,
        marginTop: 0,
        paddingHorizontal: 10
    },
    image: {
        height: 30,
        width: 30,
        margin: 5,
        flex: 2,
        borderRadius: 50
    }
})
