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
import { CategoryContext } from '../../../provider/category-provider';

const Tab = createMaterialTopTabNavigator();
const search = (keyword, setCourse, setPath, setAuthor, searchContext, categoryContext, categoryTemp, setCourseTotal, setPathTotal, setAuthorTotal) => {
    setCourse([])
    setPath([])
    setAuthor([])

    const lKeyword = keyword.toLowerCase().trim()
    const resultPathIds = []

    searchContext.search(keyword)

    categoryContext.category.forEach((value, key) => {
        if (value.name.toLowerCase().search(lKeyword) >= 0) {
            resultPathIds.push(categoryTemp[key])
        }
    })

    setCourse(searchContext.state.courses)
    setCourseTotal(searchContext.state.totalCourse)
    setPath(resultPathIds)
    setPathTotal(resultPathIds.length)
    setAuthor(searchContext.state.instructors)
    setAuthorTotal(searchContext.state.totalInstructor)
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

const resultSearch = (props, course, path, author, courseTotal, pathTotal, authorTotal) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="searchAll" options={{ title: "All" }}>
                {
                    () => <SearchAll navigation={props.navigation}
                        course={course}
                        path={path}
                        author={author}
                        courseTotal={courseTotal}
                        pathTotal={pathTotal}
                        authorTotal={authorTotal}
                    ></SearchAll>
                }
            </Tab.Screen>
            <Tab.Screen name="searchCourses" options={{ title: "Courses" }}>
                {
                    () => <SearchCourses navigation={props.navigation}
                        course={course}
                        courseTotal={courseTotal}
                    >
                    </SearchCourses>
                }
            </Tab.Screen>
            <Tab.Screen name="searchAuthors" options={{ title: "Authors" }}>
                {
                    () => <SearchAuthors navigation={props.navigation}
                        author={author}
                        authorTotal={authorTotal}
                    >
                    </SearchAuthors>
                }
            </Tab.Screen>
            <Tab.Screen name="searchPaths" options={{ title: "Category" }}>
                {
                    () => <SearchPaths navigation={props.navigation}
                        path={path}
                        pathTotal={pathTotal}
                    >
                    </SearchPaths>
                }
            </Tab.Screen>
        </Tab.Navigator>
    )
}
const Search = (props) => {
    const categoryContext = useContext(CategoryContext)
    const categoryTemp = Array.from(categoryContext.category)
    const searchContext = useContext(SearchContext)

    const [keyword, setKeyword] = useState('')
    const [course, setCourse] = useState([])
    const [path, setPath] = useState([])
    const [author, setAuthor] = useState([])

    const [courseTotal, setCourseTotal] = useState(0)
    const [pathTotal, setPathTotal] = useState(0)
    const [authorTotal, setAuthorTotal] = useState(0)

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
                            search(value, setCourse, setPath, setAuthor, searchContext, categoryContext, categoryTemp, setCourseTotal, setPathTotal, setAuthorTotal)
                        }
                    }}
                />
                <Button onPress={() => {
                    onPressDone(setSearching)
                    search(keyword, setCourse, setPath, setAuthor, searchContext, categoryContext, categoryTemp, setCourseTotal, setPathTotal, setAuthorTotal)
                }} title='Search' style={{ width: 60, height: 40 }} />
            </View>
            {searching == false ? resultPlaceDefault() : resultSearch(props, course, path, author, courseTotal, pathTotal, authorTotal)}
        </ScreenContainer>
    )
}

export default Search

const styles = StyleSheet.create({})
