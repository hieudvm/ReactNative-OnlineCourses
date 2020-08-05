import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import ScreenContainer from '../../../Common/screen-container'
import ThemedText from '../../../Common/themed-text'


const SectionAuthorsItem = (props) => {
    const Image_Http_URL = { uri: props.item["user.avatar"] }
    return (
        <ScreenContainer>
            <TouchableOpacity
                style={styles.touch}
                onPress={() =>{
                    props.navigation.navigate("AuthorDetail", {item: props.item})
                }}
            >
                <Image style={styles.image} source={Image_Http_URL} />
                <View style={styles.text}>
                <ThemedText h5>
                    {props.item["user.name"]}
                </ThemedText>
                </View>
            </TouchableOpacity>
        </ScreenContainer>
    )
}

export default SectionAuthorsItem

const styles = StyleSheet.create({
    image: {
        height: 90,
        width: 90,
        margin: 5,
        flex: 2,
        borderRadius: 50
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
