import React, { useContext } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ScreenContainer from '../../../Common/screen-container'
import ThemedText from '../../../Common/themed-text'
import { ScrollView } from 'react-native-gesture-handler'
import ListCoursesItem from '../../../Courses/ListCoursesItem/list-courses-item'
import SectionPathsItem from '../../Browse/SectionPathsItem/section-paths-item'
import SectionAuthorsItemForSearch from '../../Browse/SectionAuthorsItem/section-authors-item-for-search'
import SectionCategoryItemForSearch from '../../Browse/SectionPathsItem/section-category-item-for-search'

const SearchAll = (props) => {
    return (
        <ScreenContainer>
            <ScrollView>
                <View >
                    <ThemedText style={{ margin: 6 }}>Courses</ThemedText>
                    <FlatList
                        data={props.course}
                        renderItem={({ item }) => <ListCoursesItem navigation={props.navigation} item={item} />}
                    />
                </View>
                <View>
                    <ThemedText style={{ margin: 6 }}>Authors</ThemedText>
                    <FlatList
                        horizontal={true}
                        data={props.author}
                        renderItem={({ item }) => <SectionAuthorsItemForSearch navigation={props.navigation} item={item} />}
                    />
                </View>
                <View>
                    <ThemedText style={{ margin: 6 }}>Category</ThemedText>
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

export default SearchAll

const styles = StyleSheet.create({})
