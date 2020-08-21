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
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <ThemedText style={{ margin: 6 }}>Courses</ThemedText>
                        <ThemedText style={{ margin: 6 }}>{props.courseTotal} results</ThemedText>
                    </View>
                    <FlatList
                        data={props.course}
                        renderItem={({ item }) => <ListCoursesItem navigation={props.navigation} item={item} />}
                    />
                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <ThemedText style={{ margin: 6 }}>Authors</ThemedText>
                        <ThemedText style={{ margin: 6 }}>{props.authorTotal} results</ThemedText>
                    </View>
                    <FlatList
                        horizontal={true}
                        data={props.author}
                        renderItem={({ item }) => <SectionAuthorsItemForSearch navigation={props.navigation} item={item} />}
                    />
                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between'  }}>
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

export default SearchAll

const styles = StyleSheet.create({})
