import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Main/Home/home';
import SectionCoursesItem from './src/components/Main/Home/SectionCoursesItem/section-courses-item';
import SectionCourses from './src/components/Main/Home/SectionCourses/section-courses';
import ListCourses from './src/components/Courses/ListCourses/list-courses';
import ListCoursesItem from './src/components/Courses/ListCoursesItem/list-courses-item';

export default function App() {
  return (
    <View style={styles.container}>
      <ListCourses/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 24
  },
});