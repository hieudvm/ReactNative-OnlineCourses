import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ScreenContainer from '../../../../Common/screen-container'
import CategoryItem from '../CategoryItem/category-item'

const AllCategory = (props) => {
    const item = props.route.params.item
    return (
        <ScreenContainer>
            <FlatList 
                data = {item}
                renderItem={({item}) => <CategoryItem navigation={props.navigation} item={item} />}
            />
        </ScreenContainer>
    )
}

export default AllCategory

const styles = StyleSheet.create({})
