import React from 'react'
import { StyleSheet, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import SectionSkills from '../SectionSkills/section-skills'
import SectionPaths from '../SectionPaths/section-paths'
import SectionAuthors from '../SectionAuthors/section-authors'
import { Text } from 'react-native-elements'
import ScreenContainer from '../../../Common/screen-container'
import ThemedText from '../../../Common/themed-text'

const BrowseDetail = (props) => {
    const listSkills = ["Angular", "Javascript", "C#", "Java", "DataAnalysis", "ASP.NET", "NodeJs", "Design Patterns"]

    const renderListSkill = (skills) => {
        return skills.map(item => <TouchableOpacity onPress={props.onPress}><Text h5 style={styles.text}>{item}</Text></TouchableOpacity>);
    }
    return (
        <ScreenContainer>
            <ScrollView>
                <ImageBackground style={styles.button} source={require('../../../../../assets/white.jpg')}>
                    <ThemedText h4 style={{ textAlign: 'center', color: 'white', marginHorizontal: 65 }}>
                        {props.title}
                    </ThemedText>
                </ImageBackground>
                <View>
                    <ThemedText style={{ margin: 5 }}>
                        Popular skills
                    </ThemedText>
                </View>
                <ScrollView horizontal={true}>
                    {renderListSkill(listSkills)}
                </ScrollView>
                <SectionPaths navigation={props.navigation} title='Paths' />
                <SectionPaths navigation={props.navigation} title='New' />
                <SectionPaths navigation={props.navigation} title='Trending' />
                <SectionAuthors navigation={props.navigation} title='Top Author' />
            </ScrollView>
        </ScreenContainer>
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
