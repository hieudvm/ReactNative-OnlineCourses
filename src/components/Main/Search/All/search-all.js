import React, { useContext } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { ScreenContainer } from 'react-native-screens'
import ThemedText from '../../../Common/themed-text'
import { ScrollView } from 'react-native-gesture-handler'
import ListCoursesItem from '../../../Courses/ListCoursesItem/list-courses-item'
import SectionAuthorsItem from '../../Browse/SectionAuthorsItem/section-authors-item'
import SectionPathsItem from '../../Browse/SectionPathsItem/section-paths-item'

const SearchAll = (props) => {
    return (
        <ScreenContainer>
            <ScrollView>
                <View >
                    <ThemedText style={{margin: 6}}>Courses</ThemedText>
                    <FlatList
                        data={props.courseIds}
                        renderItem={({ item }) => <ListCoursesItem navigation={props.navigation} item={item} />}
                    />
                </View>
                <View>
                    <ThemedText style={{margin: 6}}>Authors</ThemedText>
                    <FlatList
                        horizontal={true}
                        data={props.authorIds}
                        renderItem={({ item }) => <SectionAuthorsItem navigation={props.navigation} item={item} />}
                    />
                </View>
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

export default SearchAll

const styles = StyleSheet.create({})
