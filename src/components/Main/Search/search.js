import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import ListCourses from '../../Courses/ListCourses/list-courses'
import ScreenContainer from '../../Common/screen-container'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CoursesContext } from '../../../provider/courses-provider';
import { PathsContext } from '../../../provider/paths-provider';
import { AuthorContext } from '../../../provider/author-provider';
import SearchAll from './All/search-all';
import Icon from 'react-native-vector-icons/FontAwesome';
import ThemedText from '../../Common/themed-text';
import SearchCourses from './Courses/search-courses';
import SearchAuthors from './Authors/search-authors';
import SearchPaths from './Paths/search-paths';

const Tab = createMaterialTopTabNavigator();
const Search = (props) => {

    const coursesContext = useContext(CoursesContext)

    const coursesTemp = Array.from(coursesContext.courses)

    const pathsContext = useContext(PathsContext)

    const pathsTemp = Array.from(pathsContext.path)

    const authorsConText = useContext(AuthorContext)

    const authorsTemp = Array.from(authorsConText.author)

    const [courseIds, setCourseIds] = useState([])

    const [pathIds, setPathIds] = useState([])

    const [authorIds, setAuthorIds] = useState([])

    const [searching, setSearching] = useState(false)

    const search = (keyword) => {
        setCourseIds([])
        setPathIds([])
        setAuthorIds([])

        const lKeyword = keyword.toLowerCase().trim()

        const resultCourseIds = []

        const resultPathIds = []

        const resultAuthorIds = []

        coursesContext.courses.forEach((value, key) => {
            if (value.title.toLowerCase().trim().search(lKeyword) >= 0) {
                resultCourseIds.push(coursesTemp[key])
            }
        })

        pathsContext.path.forEach((value, key) => {
            if (value.title.toLowerCase().search(lKeyword) >= 0) {
                 resultPathIds.push(pathsTemp[key])
            }
        })

        authorsConText.author.forEach((value, key) => {
            if (value.name.toLowerCase().search(lKeyword) >= 0) {
                resultAuthorIds.push(authorsTemp[key])
            }
        })

        setCourseIds(resultCourseIds)
        setPathIds(resultPathIds)
        setAuthorIds(resultAuthorIds)
    }

    const onPressDone = () => {
        setSearching(true)
    }

    const resultPlaceDefault = () => {
        return (
            <ScreenContainer style={{ flex: -3, justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                <ThemedText>Search</ThemedText>
            </ScreenContainer>
        )
    }

    const resultSearch = () => {
        return (
            <Tab.Navigator>
                <Tab.Screen name="searchAll" options={{ title: "All" }}>
                    {
                        () => <SearchAll navigation={props.navigation}
                            courseIds={courseIds}
                            pathIds={pathIds}
                            authorIds={authorIds}
                        ></SearchAll>
                    }
                </Tab.Screen>
                <Tab.Screen name="searchCourses" options={{ title: "Courses" }}>
                    {
                        () => <SearchCourses navigation={props.navigation}
                            courseIds={courseIds}
                        >
                        </SearchCourses>
                    }
                </Tab.Screen>
                <Tab.Screen name="searchAuthors" options={{ title: "Authors" }}>
                    {
                        () => <SearchAuthors navigation={props.navigation}
                            authorIds={authorIds}
                        >
                        </SearchAuthors>
                    }
                </Tab.Screen>
                <Tab.Screen name="searchPaths" options={{ title: "Paths" }}>
                    {
                        () => <SearchPaths navigation={props.navigation}
                            pathIds={pathIds}
                        >
                        </SearchPaths>
                    }
                </Tab.Screen>
            </Tab.Navigator>
        )
    }

    return (
        <ScreenContainer style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', margin: 6, flex: -1 }}>
                <TextInput style={{ flex: 1, borderColor: 'gray', borderWidth: 1, padding: 5 }} placeholder='Search text'
                    onChangeText={(value) => {
                        if (value === '') {
                            setSearching(false)
                        } else {
                            setSearching(true)
                            search(value)
                        }
                    }}
                />
                <Button onPress={() => {
                    onPressDone()
                }} title='Search' style={{ width: 60, height: 40 }} />
            </View>
            {searching == false ? resultPlaceDefault() : resultSearch()}
        </ScreenContainer>
    )
}

export default Search

const styles = StyleSheet.create({})
