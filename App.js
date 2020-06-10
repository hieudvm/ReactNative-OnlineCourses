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
import Icon from 'react-native-vector-icons/FontAwesome';
import ListPaths from './src/components/Main/Browse/Paths/ListPaths/list-paths';
import AllPathsItem from './src/components/Main/Browse/Paths/AllPathsItem/all-paths-item';
import AllCourses from './src/components/Courses/AllCourses/all-courses';
import BrowseDetail from './src/components/Main/Browse/BrowseDetail/browse-detail';
import SkillDetail from './src/components/Main/Browse/SkillDetail/skill-detail';
import AuthorDetail from './src/components/Main/Browse/AuthorDetail/author-detail';
import PathDetail from './src/components/Main/Browse/Paths/PathsDetail/path-detail';
import SplashScreen from './src/components/SplashScreen/splash-screen';
import Login from './src/components/Authentication/Login/login';


const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();;
const DownloadStack = createStackNavigator();
const BrowseStack = createStackNavigator();
const SearchStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="CourseDetail" component={CourseDetail} options={{title: "Course Detail"}} />
      <HomeStack.Screen name="AllCourses" component={AllCourses} options={{title: "All Courses"}} />
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
      <BrowseStack.Screen name="AllCourses" component={AllCourses} options={{title: "All Courses"}} />
      <BrowseStack.Screen name="BrowseDetail" component={BrowseDetail} options={{title: "Browse"}} />
      <BrowseStack.Screen name="SkillDetail" component={SkillDetail} options={{title: "Browse"}} />
      <BrowseStack.Screen name="Paths" component={ListPaths} options={{title: "Paths"}} />
      <BrowseStack.Screen name="AllPaths" component={AllPathsItem} options={{title: "Paths"}} />
      <BrowseStack.Screen name="PathDetail" component={PathDetail} options={{title: "Browse"}} />
      <BrowseStack.Screen name="AuthorDetail" component={AuthorDetail} options={{title: "Author"}} />
    </BrowseStack.Navigator>
  )
};

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={Search} />
      <SearchStack.Screen name="CourseDetail" component={CourseDetail} options={{title: "Course Detail"}} />
    </SearchStack.Navigator>
  )
};

export default function App() {
  return (
    // <NavigationContainer>
    //   <Tabs.Navigator>
    //     <Tabs.Screen name="Home" component={HomeStackScreen} options={{
    //       tabBarLabel: 'Home',
    //       tabBarIcon: ({ color, size }) => (
    //         <Icon name="home" color={color} size={size} />
    //       ),
    //     }}/>
    //     <Tabs.Screen name="Download" component={DownloadStackScreen} options={{
    //       tabBarLabel: 'Download',
    //       tabBarIcon: ({ color, size }) => (
    //         <Icon name="download" color={color} size={size} />
    //       ),
    //     }}/>
    //     <Tabs.Screen name="Browse" component={BrowseStackScreen} options={{
    //       tabBarLabel: 'Browse',
    //       tabBarIcon: ({ color, size }) => (
    //         <Icon name="window-restore" color={color} size={size} />
    //       ),
    //     }}/>
    //     <Tabs.Screen name="Search" component={SearchStackScreen} options={{
    //       tabBarLabel: 'Search',
    //       tabBarIcon: ({ color, size }) => (
    //         <Icon name="search" color={color} size={size} />
    //       ),
    //     }}/>
    //   </Tabs.Navigator>
    // </NavigationContainer>
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
