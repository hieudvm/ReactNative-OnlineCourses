import React from 'react'
import { StyleSheet, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import SectionPaths from '../SectionPaths/section-paths'
import SectionAuthors from '../SectionAuthors/section-authors'
import { Text } from 'react-native-elements'
import ScreenContainer from '../../../Common/screen-container'
import ThemedText from '../../../Common/themed-text'

const renderListSkill = (skills, props) => {
    return skills.map(item => <TouchableOpacity onPress={props.onPress}><Text h5 style={styles.text}>{item}</Text></TouchableOpacity>);
}

const listSkills = ["Angular", "Javascript", "C#", "Java", "DataAnalysis", "ASP.NET", "NodeJs", "Design Patterns"]

const BrowseDetail = (props) => {
    const item = props.route.params.item

    return (
        <ScreenContainer>
            <ScrollView>
                <ImageBackground style={styles.button} source={require('../../../../../assets/white.jpg')}>
                    <Text h4 style={{ textAlign: 'center', color: 'black', marginHorizontal: 65 }}>
                        {item}
                    </Text>
                </ImageBackground>
                <View>
                    <ThemedText style={{ margin: 5 }}>
                        Popular skills
                    </ThemedText>
                </View>
                <ScrollView horizontal={true}>
                    {renderListSkill(listSkills, props)}
                </ScrollView>
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
        marginBottom: 0,
        justifyContent: 'center',
        alignContent: 'center'
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
