import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import SectionCourses from './SectionCourses/section-courses'
import ImageButton from '../../Common/image-button';

const Home = (props) => {
    

    return (
        <ScrollView>
          <ImageButton title = 'NEW RELEASE' />
          <SectionCourses title ='Countinue learning' />
          <SectionCourses title ='Path' />
          <SectionCourses title ='Chanel' />
          <SectionCourses title ='Bookmarks' />
        </ScrollView>
    )
};

export default Home

const styles = StyleSheet.create({

})
