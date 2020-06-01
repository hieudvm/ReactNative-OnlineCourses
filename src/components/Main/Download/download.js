import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Download = () => {
    return (
        <View style={styles.iconItem}>
            <View style={{alignItems: 'center', justifyContent: 'center' }}>
                <Icon
                    name='download' size={60} color='darkgray' />
            </View>
            <Text style={{ textAlign: 'center', color: 'darkgray' }}>Courses you download will appear here</Text>
        </View>
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
