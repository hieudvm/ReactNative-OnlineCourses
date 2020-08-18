import React, { useContext, useEffect } from 'react'
import { StyleSheet, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import SectionSkills from './SectionSkills/section-skills'
import SectionPaths from './SectionPaths/section-paths'
import SectionAuthors from './SectionAuthors/section-authors'
import { Text } from 'react-native-elements'
import ScreenContainer from '../../Common/screen-container'
import { CoursesContext } from '../../../provider/courses-provider'
import SectionCategory from './SectionPaths/section-category'
import axios from 'axios';
import { UserContext } from '../../../provider/user-provider'


const Browse = (props) => {
  const userContext = useContext(UserContext)
  const courseContext = useContext(CoursesContext)

  useEffect(() => {
    userContext.getUserInformation()
  }, [])
  return (
    <ScreenContainer>
      <ScrollView>
        <ImageBackground style={styles.button} source={require('../../../../assets/codingBackground.jpg')}>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              props.navigation.navigate("AllCourses", { item: courseContext.state.topNew })
            }}
          >
            <Text h4 style={{ textAlign: 'center', color: 'white', marginHorizontal: 65 }}>
              NEW RELEASES
          </Text>
          </TouchableOpacity>
        </ImageBackground>
        <ImageBackground style={styles.button} source={require('../../../../assets/codingBackground.jpg')}>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              axios.get(`/user/recommend-course/${userContext.state.userInformation.id}/10/1`)
                .then((Response) => {
                  if (Response.status === 200) {
                    props.navigation.navigate("AllCourses", { item: Response.data.payload})
                  }
                }).catch((Error) => {
                })
            }}
          >
            <Text h4 style={{ textAlign: 'center', color: 'white', marginHorizontal: 65 }}>
              RECOMMEND FOR YOU
          </Text>
          </TouchableOpacity>
        </ImageBackground>
        <SectionSkills navigation={props.navigation} title='Popular skills' />
        <SectionPaths navigation={props.navigation} title='Paths' />
        <SectionCategory navigation={props.navigation} title='Category' />
        <SectionAuthors navigation={props.navigation} title='Top Author' />
      </ScrollView>
    </ScreenContainer>
  )
}

export default Browse

const styles = StyleSheet.create({
  button: {
    height: 100,
    margin: 6,
    marginBottom: 0
  },
  touch: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',

  }
})
