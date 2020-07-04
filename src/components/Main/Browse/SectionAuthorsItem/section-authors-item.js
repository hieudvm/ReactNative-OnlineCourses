import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import ScreenContainer from '../../../Common/screen-container'
import ThemedText from '../../../Common/themed-text'


const SectionAuthorsItem = (props) => {
    return (
        <ScreenContainer>
            <TouchableOpacity
                style={styles.touch}
                onPress={() =>{
                    props.navigation.navigate("AuthorDetail")
                }}
            >
                <Image style={styles.image} source={require('../../../../../assets/senior-woman-avatar.jpg')} />
                <View style={styles.text}>
                <ThemedText h5>
                    {props.title}
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
