import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import SectionPaths from '../SectionPaths/section-paths'
import SectionAuthors from '../SectionAuthors/section-authors'

const SkillDetail = (props) => {
    return (
        <View>
            <ScrollView>
                <SectionPaths title='Paths' />
                <SectionPaths title='New' />
                <SectionPaths title='Trending' />
                <SectionAuthors title='Top Author' />
            </ScrollView>
        </View>
    )
}

export default SkillDetail

const styles = StyleSheet.create({})
