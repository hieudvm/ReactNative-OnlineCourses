import React from 'react'
import { StyleSheet, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import SectionSkills from '../SectionSkills/section-skills'
import SectionPaths from '../SectionPaths/section-paths'
import SectionAuthors from '../SectionAuthors/section-authors'
import { Text } from 'react-native-elements'

const BrowseDetail = (props) => {
    const listSkills = ["Angular", "Javascript", "C#", "Java", "DataAnalysis", "ASP.NET", "NodeJs", "Design Patterns"]

    const renderListSkill = (skills) => {
        return skills.map(item => <TouchableOpacity onPress={props.onPress}><Text h5 style={styles.text}>{item}</Text></TouchableOpacity>);
    }
    return (
        <View>
            <ScrollView>
                <ImageBackground style={styles.button} source={require('../../../../../assets/white.jpg')}>
                    <Text h4 style={{ textAlign: 'center', color: 'white', marginHorizontal: 65 }}>
                        {props.title}
          </Text>
                </ImageBackground>
                <View>
                    <Text style={{ margin: 5 }}>
                        Popular skills
                    </Text>
                </View>
                <ScrollView horizontal={true}>
                    {renderListSkill(listSkills)}
                </ScrollView>
                <SectionPaths title='Paths' />
                <SectionPaths title='New' />
                <SectionPaths title='Trending' />
                <SectionAuthors title='Top Author' />
            </ScrollView>
        </View>
    )
}

export default BrowseDetail

const styles = StyleSheet.create({
    button: {
        height: 230,
        marginBottom: 0
    },
    touch: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',

    },
    text: {
        backgroundColor: 'gray',
        borderRadius: 2,
        color: 'white',
        margin: 6,
        paddingHorizontal: 6
    }
})
