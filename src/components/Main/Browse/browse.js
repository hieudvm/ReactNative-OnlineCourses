import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import SectionSkills from './SectionSkills/section-skills'
import ImageButton from '../../Common/image-button'
import SectionPaths from './SectionPaths/section-paths'
import SectionAuthors from './SectionAuthors/section-authors'

const Browse = () => {
    return (
        <ScrollView>
          <ImageButton title = 'NEW RELEASE' />
          <ImageButton title = 'RECONMAND FOR YOU' />
          <SectionSkills title ='Popular skills' />
          <SectionPaths title = 'Paths'/>
          <SectionAuthors title = 'Author' />
        </ScrollView>
    )
}

export default Browse

const styles = StyleSheet.create({})
