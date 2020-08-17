import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import ThemedText from '../Common/themed-text';

const ListItem = (props) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <View
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                >
                    <ThemedText style={{ margin: 6, flex: 1 }}>
                        {props.item}
                    </ThemedText>
                </View>
            </View>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({})
