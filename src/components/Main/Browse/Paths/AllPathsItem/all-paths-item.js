import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import PathsItem from '../PathsItem/paths-item'
import ScreenContainer from '../../../../Common/screen-container'

const AllPathsItem = (props) => {
    const item = props.route.params.item
    return (
        <ScreenContainer>
            <FlatList 
                data = {item}
                renderItem={({item}) => <PathsItem navigation={props.navigation} item={item} />}
            />
        </ScreenContainer>
    )
}

export default AllPathsItem

const styles = StyleSheet.create({})
