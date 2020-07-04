import React, { useContext } from 'react'
import { StyleSheet, FlatList, Text, View, TouchableOpacity } from 'react-native'
import WishlistItem from './wishlist-item'
import { ScrollView, Switch } from 'react-native-gesture-handler'
import { ThemeContext, themes } from '../../../provider/themes-provider'
import ScreenContainer from '../../Common/screen-container'
import ThemedText from '../../Common/themed-text'

const Wishlist = (props) => {

    const data = [
        {
            id: 1,
            title: 'Account',
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
const themeContext = useContext(ThemeContext)
    return (
        <ScreenContainer>
            <ScrollView>
                <View style={{flexDirection: 'row',  alignItems: 'center', alignSelf: 'stretch' }}>
                    <ThemedText style={{ margin: 6, flex: 1 }}>Darktheme</ThemedText>
                    <Switch
                    value={themeContext.theme == themes.dark}
                    onValueChange={(switched) => themeContext.setTheme(switched ? themes.dark : themes.light)}></Switch>
                </View>
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
        </ScreenContainer>
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
