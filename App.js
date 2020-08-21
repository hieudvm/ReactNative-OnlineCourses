import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Main/Home/home';
import Browse from './src/components/Main/Browse/browse';
import AppProvider from './src/provider/app-provider'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CourseDetail from './src/components/CoursesDetail/course-detail';
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
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Wishlist from './src/components/Main/Wishlist/wishlist';
import User from './src/components/Others/User/user';
import { AuthenticationProvider, AuthenticationContext } from './src/provider/authentication-provider';
import { ThemeContext, themes } from './src/provider/themes-provider';
import { CoursesProvider } from './src/provider/courses-provider';
import { AuthorProvider } from './src/provider/author-provider';
import { PathsProvider } from './src/provider/paths-provider';
import { FavouritesProvider, FavouritesContext } from './src/provider/favourites-provider';
import SearchAll from './src/components/Main/Search/All/search-all';
import SearchCourses from './src/components/Main/Search/Courses/search-courses';
import SearchAuthors from './src/components/Main/Search/Authors/search-authors';
import SearchPaths from './src/components/Main/Search/Paths/search-paths';
import './interceptors';
import { CourseDetailProvider } from './src/provider/courseDetail-provider';
import { RegisterProvider } from './src/provider/register-provider';
import welcome from './src/components/Authentication/welcome';
import Register from './src/components/Authentication/Register/register';
import { UserProvider } from './src/provider/user-provider';
import ForgetPassword from './src/components/Authentication/ForgetPassword/forget-password';
import { SearchProvider } from './src/provider/search-provider';
import CourseDescriptions from './src/components/CoursesDetail/course-descriptions';
import PaymentStatus from './src/components/Common/payment-status';
import ChangePassword from './src/components/Others/User/change-password';
import UpdateProfile from './src/components/Others/User/update-profile';
import Feedback from './src/components/Others/FeedBack/feed-back';
import ContactSupport from './src/components/Others/ContactSupport/contact-support';
import AllCategory from './src/components/Main/Browse/Paths/AllCategory/all-category';
import RatingCourse from './src/components/Others/Rating/rating-course';
import CourseExcercise from './src/components/CoursesDetail/Excercise/course-excercise';
import { VideoProvider } from './src/provider/video-provider';
import Rating from './src/components/CoursesDetail/Rating/rating';
import { CategoryProvider } from './src/provider/category-provider';
import SeeAllCourse from './src/components/Courses/SeeAllCourse/see-all-course';

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const UserStack = createStackNavigator();
const AuthenStack = createStackNavigator();
const Stack = createStackNavigator();
const DownloadStack = createStackNavigator();
const BrowseStack = createStackNavigator();
const SearchStack = createStackNavigator();

const HomeStackScreen = (props) => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("Wishlist")
              }
            >
              <Icon style={{ marginLeft: 6 }} size={20} name="th-list" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("User")
              }
            >
              <Icon style={{ marginRight: 6 }} size={20} name="user" />
            </TouchableOpacity>
          ),
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit
        }} />
      <HomeStack.Screen name="Wishlist" component={Wishlist} options={{ title: "Setting" }} />
      <HomeStack.Screen name="User" component={User} options={{ title: "User" }} />
      <HomeStack.Screen name="Feedback" component={Feedback} options={{ title: "Feedback" }} />
      <HomeStack.Screen name="ContactSupport" component={ContactSupport} options={{ title: "Contact Support" }} />
      <HomeStack.Screen name="ChangePassword" component={ChangePassword} options={{ title: "Change Password" }} />
      <HomeStack.Screen name="UpdateProfile" component={UpdateProfile} options={{ title: "Update Profile" }} />
      <HomeStack.Screen name="CourseDetail" component={CourseDetail} options={{ title: "Course Detail" }} />
      <HomeStack.Screen name="PaymentStatus" component={PaymentStatus} options={{ title: "Subscribed" }} />
      <HomeStack.Screen name="CourseDescriptions" component={CourseDescriptions} options={{ title: "Course Detail" }} />
      <HomeStack.Screen name="AllCourses" component={AllCourses} options={{ title: "All Courses" }} />
      <HomeStack.Screen name="SeeAllCourse" component={SeeAllCourse} options={{ title: "All Category" }} />
      <HomeStack.Screen name="CourseExcercise" component={CourseExcercise} options={{ title: "Course Excercise" }} />
      <HomeStack.Screen name="RatingCourse" component={RatingCourse} options={{ title: "Rating Course" }} />
      <HomeStack.Screen name="Rating" component={Rating} options={{ title: "Rating Course" }} />
      <HomeStack.Screen name="UserThread" component={UserThread} />
      <HomeStack.Screen name="AuthorDetail" component={AuthorDetail} options={{ title: "Author Detail" }} />
    </HomeStack.Navigator>
  )
};

const UserThread = () => {
  return (
    <UserStack.Navigator headerMode='none'>
      <UserStack.Screen name="Login" component={Login} />
    </UserStack.Navigator>
  )
}

const DownloadStackScreen = (props) => {

  return (
    <DownloadStack.Navigator>
      <DownloadStack.Screen name="Favorite" component={Download} />
      <DownloadStack.Screen name="CourseExcercise" component={CourseExcercise} options={{ title: "Course Excercise" }} />
      <DownloadStack.Screen name="CourseDescriptions" component={CourseDescriptions} options={{ title: "Course Detail" }} />
      <DownloadStack.Screen name="AuthorDetail" component={AuthorDetail} options={{ title: "Author" }} />
      <DownloadStack.Screen name="CourseDetail" component={CourseDetail} options={{ title: "Course Detail" }} />
      <DownloadStack.Screen name="RatingCourse" component={RatingCourse} options={{ title: "Rating Course" }} />
    </DownloadStack.Navigator>
  )
};

const BrowseStackScreen = (props) => {
  return (
    <BrowseStack.Navigator>
      <BrowseStack.Screen name="Browse" component={Browse} />
      <BrowseStack.Screen name="BrowseDetail" component={BrowseDetail} options={{ title: "Browse" }} />
      <BrowseStack.Screen name="SkillDetail" component={SkillDetail} options={{ title: "Browse" }} />
      <BrowseStack.Screen name="Paths" component={ListPaths} options={{ title: "Paths" }} />
      <BrowseStack.Screen name="AllPaths" component={AllPathsItem} options={{ title: "Paths" }} />
      <BrowseStack.Screen name="PathDetail" component={PathDetail} options={{ title: "Browse" }} />
      <BrowseStack.Screen name="AuthorDetail" component={AuthorDetail} options={{ title: "Author" }} />
      <BrowseStack.Screen name="AllCategory" component={AllCategory} options={{ title: "All Category" }} />
      <BrowseStack.Screen name="AllCourses" component={AllCourses} options={{ title: "Courses" }} />
      <BrowseStack.Screen name="CourseExcercise" component={CourseExcercise} options={{ title: "Course Excercise" }} />
      <BrowseStack.Screen name="RatingCourse" component={RatingCourse} options={{ title: "Rating Course" }} />
      <BrowseStack.Screen name="CourseDetail" component={CourseDetail} options={{ title: "Course Detail" }} />
      <BrowseStack.Screen name="CourseDescriptions" component={CourseDescriptions} options={{ title: "Course Detail" }} />
    </BrowseStack.Navigator>
  )
};

const SearchStackScreen = (props) => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={Search} />
      <SearchStack.Screen name="SearchAll" component={SearchAll} options={{ title: "Search" }} />
      <SearchStack.Screen name="SearchCourses" component={SearchCourses} options={{ title: "Search" }} />
      <SearchStack.Screen name="SearchAuthors" component={SearchAuthors} options={{ title: "Search" }} />
      <SearchStack.Screen name="SearchPaths" component={SearchPaths} options={{ title: "Search" }} />
      <SearchStack.Screen name="AuthorDetail" component={AuthorDetail} options={{ title: "Author" }} />
      <SearchStack.Screen name="PathDetail" component={PathDetail} options={{ title: "Path Detail" }} />
      <SearchStack.Screen name="CourseExcercise" component={CourseExcercise} options={{ title: "Course Excercise" }} />
      <SearchStack.Screen name="RatingCourse" component={RatingCourse} options={{ title: "Rating Course" }} />
      <SearchStack.Screen name="CourseDetail" component={CourseDetail} options={{ title: "Course Detail" }} />
    </SearchStack.Navigator>
  )
};

const MainTab = () => {
  const favoriteContext = useContext(FavouritesContext)
  useEffect(() => {
    favoriteContext.getFavoriteCourses()
  }, [])
  return (
    <Tabs.Navigator initialRouteName="Home">
      <Tabs.Screen name="Home" component={HomeStackScreen} options={{
        tabBarLabel: 'Home',

        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        ),
      }} />
      <Tabs.Screen name="Favorite" component={DownloadStackScreen} options={{
        tabBarLabel: 'Favorite',
        tabBarIcon: ({ color, size }) => (
          <Icon name="bookmark" color={color} size={size} />
        ),
      }} />
      <Tabs.Screen name="Browse" component={BrowseStackScreen} options={{
        tabBarLabel: 'Browse',
        tabBarIcon: ({ color, size }) => (
          <Icon name="window-restore" color={color} size={size} />
        ),
      }} />
      <Tabs.Screen name="Search" component={SearchStackScreen} options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color, size }) => (
          <Icon name="search" color={color} size={size} />
        ),
      }} />
    </Tabs.Navigator>
  )
};

const Authen = () => {
  return (
    <AuthenStack.Navigator headerMode='none' initialRouteName="Welcome">
      <AuthenStack.Screen name="ForgotPassword" component={ForgetPassword} />
      <AuthenStack.Screen name="Login" component={Login} />
      <AuthenStack.Screen name="Register" component={Register} />
      <AuthenStack.Screen name="Welcome" component={welcome} />
    </AuthenStack.Navigator>
  )
}

export default function App() {

  console.disableYellowBox = true;
  const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme }}
    >
      <AuthenticationProvider>
        <CoursesProvider>
          <AuthorProvider>
            <CourseDetailProvider>
              <RegisterProvider>
                <UserProvider>
                  <PathsProvider>
                    <SearchProvider>
                      <FavouritesProvider>
                        <VideoProvider>
                          <CategoryProvider>
                            <NavigationContainer>
                              <Stack.Navigator headerMode='none' initialRouteName="AuthenStack">
                                <Stack.Screen name="MainTab" component={MainTab} />
                                <Stack.Screen name="AuthenStack" component={Authen} />
                              </Stack.Navigator>
                            </NavigationContainer>
                          </CategoryProvider>
                        </VideoProvider>
                      </FavouritesProvider>
                    </SearchProvider>
                  </PathsProvider>
                </UserProvider>
              </RegisterProvider>
            </CourseDetailProvider>
          </AuthorProvider>
        </CoursesProvider>
      </AuthenticationProvider>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
