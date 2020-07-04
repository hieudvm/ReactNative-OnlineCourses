import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { Text } from 'react-native-elements'
import ScreenContainer from '../../../Common/screen-container'
import ThemedText from '../../../Common/themed-text'


const SectionPathsItem = (props) => {
    return (
        <ScreenContainer>
            <TouchableOpacity
                style={styles.touch}
                onPress={() => {
                    props.navigation.navigate("PathDetail")
                }}
            >
                <Image style={styles.image} source={require('../../../../../assets/background2.jpg')} />
                <View style={styles.text}>
                <ThemedText h5>
                    {props.title}
                </ThemedText>
                </View>
            </TouchableOpacity>

        </ScreenContainer>
    )
}

export default SectionPathsItem

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 250,
        margin: 6,
        marginBottom: 0,
        flex: -3
    },
    touch: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',

    },
    text: {
        flex: 3,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignContent: 'center',
        margin: 6,
        marginTop: 0,
        padding: 10,
        paddingHorizontal: 40
    }
})
