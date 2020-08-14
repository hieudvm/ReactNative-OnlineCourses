import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import ImageButtonItem from '../../../Common/image-button-item'
import { Text } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ScreenContainer from '../../../Common/screen-container'
import ThemedText from '../../../Common/themed-text'

const skills = ["CONFERENCES", "<Software> \r\n Development", "IT", "Information \r\n AND \r\n CYBER SECURITY", "DATA Professional"]

const skills2 = ["BUSSINESS \r\n Professtional", "Creative \r\n PROFESSIONAL", "MANUALFACTURING \r\n AND \r\n Design", "ARCHITECTURE \r\n AND Contrucstion", "CERTIFICATIONS"]

const listSkills = ["Angular", "Javascript", "C#", "Java", "DataAnalysis", "ASP.NET", "NodeJs", "Design Patterns"]

const renderListItem = (skills, props) => {
    return skills.map(item => <ImageButtonItem navigation={props.navigation} item={item} />);
}

const renderListSkill = (skills, props) => {
    return skills.map(item => <TouchableOpacity
        onPress={() => {
            props.navigation.navigate("SkillDetail")
        }}
    ><ThemedText h5 style={styles.text}>{item}</ThemedText></TouchableOpacity>);
}

const SectionSkills = (props) => {
    return (
        <ScreenContainer>
            <View>
                <Text style={{ margin: 5 }}>
                    {props.title}
                </Text>
            </View>
            <ScrollView horizontal={true}>
                {renderListSkill(listSkills, props)}
            </ScrollView>
            <ScrollView horizontal={true}>
                {renderListItem(skills, props)}
            </ScrollView>
            <ScrollView horizontal={true}>
                {renderListItem(skills2, props)}
            </ScrollView>
        </ScreenContainer>
    )
}

export default SectionSkills

const styles = StyleSheet.create({
    text: {
        backgroundColor: 'gray',
        borderRadius: 2,
        color: 'white',
        margin: 6,
        paddingHorizontal: 6
    }
})
