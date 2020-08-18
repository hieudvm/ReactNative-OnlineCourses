import React, { useContext } from 'react'
import { StyleSheet, FlatList, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView, Switch } from 'react-native-gesture-handler'
import { ThemeContext, themes } from '../../../provider/themes-provider'
import ScreenContainer from '../../Common/screen-container'
import ThemedText from '../../Common/themed-text'
import { AuthenticationContext } from '../../../provider/authentication-provider'

const Wishlist = (props) => {
    const authContext = useContext(AuthenticationContext)
    const themeContext = useContext(ThemeContext)
    return (
        <ScreenContainer>
            <ScrollView>
                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'stretch' }}>
                    <ThemedText style={{ margin: 6, flex: 1 }}>Darktheme</ThemedText>
                    <Switch
                        value={themeContext.theme == themes.dark}
                        onValueChange={(switched) => themeContext.setTheme(switched ? themes.dark : themes.light)}></Switch>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'stretch' }}>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate("User")
                        }}
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        <ThemedText style={{ margin: 6, flex: 1 }}>
                            Account
                        </ThemedText>
                        <View style={{ backgroundColor: 'lightgray', marginRight: 6, paddingHorizontal: 10, borderRadius: 10 }}>

                            <Icon name="angle-right" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'stretch' }}>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate("Feedback")
                        }}
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        <ThemedText style={{ margin: 6, flex: 1 }}>
                            Send feedback
                        </ThemedText>
                        <View style={{ backgroundColor: 'lightgray', marginRight: 6, paddingHorizontal: 10, borderRadius: 10 }}>

                            <Icon name="angle-right" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'stretch' }}>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate("ContactSupport")
                        }}
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        <ThemedText style={{ margin: 6, flex: 1 }}>
                            Contact support
                        </ThemedText>
                        <View style={{ backgroundColor: 'lightgray', marginRight: 6, paddingHorizontal: 10, borderRadius: 10 }}>

                            <Icon name="angle-right" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'stretch' }}>
                    <ThemedText style={{ margin: 6, flex: 1 }}>
                        App Version
                        </ThemedText>
                    <View style={{ backgroundColor: 'lightgray', marginRight: 6, paddingHorizontal: 10, borderRadius: 10 }}>

                        <Text> V 1.0.0</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            authContext.logout()
                            props.navigation.navigate("Login")
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
