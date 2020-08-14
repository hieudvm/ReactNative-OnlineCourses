import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import ScreenContainer from '../../Common/screen-container'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { PathsContext } from '../../../provider/paths-provider';
import SearchAll from './All/search-all';
import ThemedText from '../../Common/themed-text';
import SearchCourses from './Courses/search-courses';
import SearchAuthors from './Authors/search-authors';
import SearchPaths from './Paths/search-paths';
import { SearchContext } from '../../../provider/search-provider';

const Tab = createMaterialTopTabNavigator();
const search = (keyword, setCourse, setPath, setAuthor, searchContext, pathsContext, pathsTemp) => {
    setCourse([])
    setPath([])
    setAuthor([])

    const lKeyword = keyword.toLowerCase().trim()
    const resultPathIds = []

    searchContext.search(keyword)

    pathsContext.path.forEach((value, key) => {
        if (value.title.toLowerCase().search(lKeyword) >= 0) {
            resultPathIds.push(pathsTemp[key])
        }
    })

    setCourse(searchContext.state.courses)
    setPath(resultPathIds)
    setAuthor(searchContext.state.instructors)
}

const onPressDone = (setSearching) => {
    setSearching(true)
}

const resultPlaceDefault = () => {
    return (
        <ScreenContainer style={{ flex: -3, justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
            <ThemedText>Search</ThemedText>
        </ScreenContainer>
    )
}

const resultSearch = (props, course, path, author) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="searchAll" options={{ title: "All" }}>
                {
                    () => <SearchAll navigation={props.navigation}
                        course={course}
                        path={path}
                        author={author}
                    ></SearchAll>
                }
            </Tab.Screen>
            <Tab.Screen name="searchCourses" options={{ title: "Courses" }}>
                {
                    () => <SearchCourses navigation={props.navigation}
                        course={course}
                    >
                    </SearchCourses>
                }
            </Tab.Screen>
            <Tab.Screen name="searchAuthors" options={{ title: "Authors" }}>
                {
                    () => <SearchAuthors navigation={props.navigation}
                        author={author}
                    >
                    </SearchAuthors>
                }
            </Tab.Screen>
            <Tab.Screen name="searchPaths" options={{ title: "Paths" }}>
                {
                    () => <SearchPaths navigation={props.navigation}
                        path={path}
                    >
                    </SearchPaths>
                }
            </Tab.Screen>
        </Tab.Navigator>
    )
}
const Search = (props) => {
    const pathsContext = useContext(PathsContext)
    const pathsTemp = Array.from(pathsContext.path)
    const searchContext = useContext(SearchContext)

    const [keyword, setKeyword] = useState('')
    const [course, setCourse] = useState([])
    const [path, setPath] = useState([])
    const [author, setAuthor] = useState([])
    const [searching, setSearching] = useState(false)

    return (
        <ScreenContainer style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', margin: 6, flex: -1 }}>
                <TextInput style={{ flex: 1, borderColor: 'gray', borderWidth: 1, padding: 5 }} placeholder='Search text'
                    onChangeText={(value) => {
                        setKeyword(value)
                        if (value === '') {
                            setSearching(false)
                        } else {
                            setSearching(true)
                            search(value, setCourse, setPath, setAuthor, searchContext, pathsContext, pathsTemp)
                        }
                    }}
                />
                <Button onPress={() => {
                    onPressDone(setSearching)
                    search(keyword, setCourse, setPath, setAuthor, searchContext, pathsContext, pathsTemp)
                }} title='Search' style={{ width: 60, height: 40 }} />
            </View>
            {searching == false ? resultPlaceDefault() : resultSearch(props, course, path, author)}
        </ScreenContainer>
    )
}

export default Search

const styles = StyleSheet.create({})
