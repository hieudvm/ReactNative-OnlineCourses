import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const WishlistItem = (props) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'stretch' }}>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate("Home")
                    }}
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                >
                    <Text style={{ margin: 6, flex: 1 }}>
                        {props.item.title}
                    </Text>
                    <View style={{ backgroundColor: 'lightgray', marginRight: 6, paddingHorizontal: 10, borderRadius: 10 }}>

                        <Icon name="angle-right" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WishlistItem

const styles = StyleSheet.create({})
