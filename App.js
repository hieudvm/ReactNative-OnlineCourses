import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Main/Home/home';
import SectionCoursesItem from './src/components/Main/Home/SectionCoursesItem/section-courses-item';
import SectionCourses from './src/components/Main/Home/SectionCourses/section-courses';
import ListCourses from './src/components/Courses/ListCourses/list-courses';
import ListCoursesItem from './src/components/Courses/ListCoursesItem/list-courses-item';
import Browse from './src/components/Main/Browse/browse';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CourseDetail from './src/components/CoursesDetail/course-detail';
import ListLessons from './src/components/CoursesDetail/ListLessons/list-lessons';
import Download from './src/components/Main/Download/download';
import Search from './src/components/Main/Search/search';


const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();;
const DownloadStack = createStackNavigator();
const BrowseStack = createStackNavigator();
const SearchStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  )
};

const DownloadStackScreen = () => {
  return (
    <DownloadStack.Navigator>
      <DownloadStack.Screen name="Download" component={Download} />
    </DownloadStack.Navigator>
  )
};

const BrowseStackScreen = () => {
  return (
    <BrowseStack.Navigator>
      <BrowseStack.Screen name="Browse" component={Browse} />
    </BrowseStack.Navigator>
  )
};

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={Search} />
    </SearchStack.Navigator>
  )
};



export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeStackScreen} />
        <Tabs.Screen name="Download" component={DownloadStackScreen} />
        <Tabs.Screen name="Browse" component={BrowseStackScreen} />
        <Tabs.Screen name="Search" component={SearchStackScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 24
  },
});
