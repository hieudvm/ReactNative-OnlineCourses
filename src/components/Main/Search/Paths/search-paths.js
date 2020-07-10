import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ScreenContainer from '../../../Common/screen-container'
import ThemedText from '../../../Common/themed-text'
import { ScrollView, FlatList } from 'react-native-gesture-handler'
import SectionPathsItem from '../../Browse/SectionPathsItem/section-paths-item'

const SearchPaths = (props) => {
    return (
        <ScreenContainer>
            <ScrollView >
                <View>
                    <ThemedText style={{margin: 6}}>Paths</ThemedText>
                    <FlatList
                        horizontal={true}
                        data={props.pathIds}
                        renderItem={({ item }) => <SectionPathsItem navigation={props.navigation} item={item} />}
                    />
                </View>
            </ScrollView>
        </ScreenContainer>
    )
}

export default SearchPaths

const styles = StyleSheet.create({})
