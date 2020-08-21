import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ScreenContainer from '../../../Common/screen-container'
import ThemedText from '../../../Common/themed-text'
import { ScrollView, FlatList } from 'react-native-gesture-handler'
import SectionCategoryItemForSearch from '../../Browse/SectionPathsItem/section-category-item-for-search'

const SearchPaths = (props) => {
    return (
        <ScreenContainer>
            <ScrollView >
                <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <ThemedText style={{ margin: 6 }}>Category</ThemedText>
                        <ThemedText style={{ margin: 6 }}>{props.pathTotal} results</ThemedText>
                    </View>
                    <FlatList
                        horizontal={true}
                        data={props.path}
                        renderItem={({ item }) => <SectionCategoryItemForSearch navigation={props.navigation} item={item} />}
                    />
                </View>
            </ScrollView>
        </ScreenContainer>
    )
}

export default SearchPaths

const styles = StyleSheet.create({})
