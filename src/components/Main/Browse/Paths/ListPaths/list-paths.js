import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SectionPaths from '../../SectionPaths/section-paths'
import { ScrollView } from 'react-native-gesture-handler'

const ListPaths = () => {
    return (
        <View>
            <ScrollView>
                <SectionPaths title="Conferences" />
                <SectionPaths title="Software Development" />
                <SectionPaths title="IT Ops" />
                <SectionPaths title="Information Security" />
                <SectionPaths title="Data Professional" />
                <SectionPaths title="Business Professional" />
                <SectionPaths title="Creative Professional" />
            </ScrollView>
        </View>
    )
}

export default ListPaths

const styles = StyleSheet.create({})
