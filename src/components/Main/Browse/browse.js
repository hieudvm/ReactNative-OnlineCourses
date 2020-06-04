import React from 'react'
import { StyleSheet, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import SectionSkills from './SectionSkills/section-skills'
import SectionPaths from './SectionPaths/section-paths'
import SectionAuthors from './SectionAuthors/section-authors'
import { Text } from 'react-native-elements'

const Browse = (props) => {
  return (
    <ScrollView>
      <ImageBackground style={styles.button} source={require('../../../../assets/codingBackground.jpg')}>
        <TouchableOpacity
          style={styles.touch}
          onPress={props.onPress}
        >
          <Text h4 style={{textAlign: 'center', color: 'white', marginHorizontal: 65}}>
            NEW RELEASES
          </Text>
        </TouchableOpacity>
      </ImageBackground>
      <ImageBackground style={styles.button} source={require('../../../../assets/codingBackground.jpg')}>
        <TouchableOpacity
          style={styles.touch}
          onPress={props.onPress}
        >
          <Text h4 style={{textAlign: 'center', color: 'white', marginHorizontal: 65}}>
            RECOMMEND FOR YOU
          </Text>
        </TouchableOpacity>
      </ImageBackground>
      <SectionSkills title='Popular skills' />
      <SectionPaths title='Paths' />
      <SectionAuthors title='Top Author' />
    </ScrollView>
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
