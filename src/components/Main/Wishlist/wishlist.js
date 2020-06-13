import React from 'react'
import { StyleSheet, FlatList, Text, View, TouchableOpacity } from 'react-native'
import WishlistItem from './wishlist-item'
import { ScrollView } from 'react-native-gesture-handler'

const Wishlist = (props) => {

    const data = [
        {
            id: 1,
            title: 'Account',
        },
        {
            id: 2,
            title: 'Theme',
        },
        {
            id: 3,
            title: 'Send feedback',
        },
        {
            id: 4,
            title: 'Contact support',
        },
        {
            id: 5,
            title: 'App Version',
        }
    ]

    return (
        <View>
            <ScrollView>
                <View>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <WishlistItem navigation={props.navigation} item={item} />}
                    />
                </View>
                <View style={{alignItems: 'center', marginTop: 10}}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            props.navigation.navigate("Login", {status : 0})
                        }}
                    >
                        <Text style={styles.text}>Sign out</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Wishlist

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 50,
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 20,
        backgroundColor: 'darkgray'
    }
})
