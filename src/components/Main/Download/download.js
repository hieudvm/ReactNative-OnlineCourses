import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import ThemedText from '../../Common/themed-text';
import ScreenContainer from '../../Common/screen-container';

const Download = () => {
    return (
        <ScreenContainer style={styles.iconItem}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Icon
                        name='bookmark' size={60} color='darkgray' />
                </View>
                <ThemedText style={{ textAlign: 'center', color: 'darkgray' }}>Courses you favorite will appear here</ThemedText>
        </ScreenContainer>
    )
}

export default Download

const styles = StyleSheet.create({
    iconItem: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center'
    }
})
