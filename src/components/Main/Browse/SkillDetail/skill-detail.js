import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import SectionPaths from '../SectionPaths/section-paths'
import SectionAuthors from '../SectionAuthors/section-authors'

const SkillDetail = (props) => {
    return (
        <View>
            <ScrollView>
                <SectionPaths navigation={props.navigation} title='Paths' />
                <SectionPaths navigation={props.navigation} title='New' />
                <SectionPaths navigation={props.navigation} title='Trending' />
                <SectionAuthors navigation={props.navigation} title='Top Author' />
            </ScrollView>
        </View>
    )
}

export default SkillDetail

const styles = StyleSheet.create({})
