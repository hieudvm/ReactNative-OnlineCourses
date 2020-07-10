import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScreenContainer } from 'react-native-screens'
import { ScrollView, FlatList } from 'react-native-gesture-handler'
import ThemedText from '../../../Common/themed-text'
import SectionAuthorsItem from '../../Browse/SectionAuthorsItem/section-authors-item'

const SearchAuthors = (props) => {
    return (
        <ScreenContainer>
            <ScrollView>
                <View>
                    <ThemedText style={{ margin: 6 }}>Authors</ThemedText>
                    <FlatList
                        horizontal={true}
                        data={props.authorIds}
                        renderItem={({ item }) => <SectionAuthorsItem navigation={props.navigation} item={item} />}
                    />
                </View>
            </ScrollView>
        </ScreenContainer>
    )
}

export default SearchAuthors

const styles = StyleSheet.create({})
