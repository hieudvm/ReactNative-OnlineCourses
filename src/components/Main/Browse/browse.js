import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import SectionSkills from './SectionSkills/section-skills'
import ImageButton from '../../Common/image-button'

const Browse = () => {
    return (
        <ScrollView>
          <ImageButton title = 'NEW RELEASE' />
          <ImageButton title = 'RECONMAND FOR YOU' />
          <SectionSkills title ='Popular skills' />
        </ScrollView>
    )
}

export default Browse

const styles = StyleSheet.create({})
