import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import SectionPaths from '../SectionPaths/section-paths'
import SectionAuthors from '../SectionAuthors/section-authors'
import ScreenContainer from '../../../Common/screen-container'

const SkillDetail = (props) => {
    return (
        <ScreenContainer>
            <ScrollView>
                <SectionPaths navigation={props.navigation} title='Paths' />
                <SectionPaths navigation={props.navigation} title='New' />
                <SectionPaths navigation={props.navigation} title='Trending' />
                <SectionAuthors navigation={props.navigation} title='Top Author' />
            </ScrollView>
        </ScreenContainer>
    )
}

export default SkillDetail

const styles = StyleSheet.create({})
