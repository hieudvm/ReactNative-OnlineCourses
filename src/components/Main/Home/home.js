import React, { useContext, useEffect } from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import SectionCourses from './SectionCourses/section-courses'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from 'react-native-elements'
import ScreenContainer from '../../Common/screen-container';
import { CoursesContext } from '../../../provider/courses-provider';

const Home = (props) => {
  return (
    <ScreenContainer >
      <ScrollView>
        <View style={{ margin: 6, backgroundColor: 'lightgray', borderRadius: 5 }}>
          <ImageBackground style={styles.button} source={require('../../../../assets/code.jpeg')}>
            <TouchableOpacity
              style={styles.touch}
              onPress={props.onPress}
            >
              <Text h3 style={{ marginBottom: 10, textAlign: 'center', color: 'white' }}>
                Welcome to E-Learning.io
                  </Text>
              <Text h5 style={{ marginBottom: 10, textAlign: 'center', color: 'white' }}>
                With e-learning.io you can build and apply skills in top technologies.
                  </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <SectionCourses navigation={props.navigation} title='Countinue learning' />
        <SectionCourses navigation={props.navigation} title='Top Selling' />
        <SectionCourses navigation={props.navigation} title='Top New Courses' />
        <SectionCourses navigation={props.navigation} title='Top Rating' />
        <View style={styles.icon}>
          <View>
            <Text>My paths</Text>
            <View style={styles.iconItem}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Icon
                  name='sitemap' size={30} />
              </View>
              <Text style={{ textAlign: 'center' }}>Paths will guide you learning a specific skill or  technology.</Text>
            </View>
          </View>
          <View>
            <Text>My chanel</Text>
            <View style={styles.iconItem}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Icon
                  name='podcast' size={30} />
              </View>
              <Text style={{ textAlign: 'center' }}>Use chanel to save, organize, and share content to accomplish your learning objectives.</Text>
            </View>
          </View>
          <View>
            <Text>Favorite</Text>
            <View style={styles.iconItem}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Icon
                  name='bookmark' size={30} />
              </View>
              <Text style={{ textAlign: 'center' }}>Use bookmarks to quickly save courses for later.</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  )
};

export default Home

const styles = StyleSheet.create({
  icon: {
    flex: -2,
    margin: 6,
  },
  iconItem: {
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'lightgray',
    paddingTop: 15,
    paddingHorizontal: 10,
    height: 100,
    borderRadius: 5
  },
  button: {
    height: 150,
  },
  touch: {
    flex: 1,
    justifyContent: 'flex-end',
    alignContent: 'center',

  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
