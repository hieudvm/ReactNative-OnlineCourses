import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import ImageButtonItem from '../../../Common/image-button-item'
import { Text } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SectionSkills = (props) => {

    const skills = ["CONFERENCES", "<Software> \r\n Development", "IT", "Information \r\n AND \r\n CYBER SECURITY", "DATA Professional"]

    const skills2 = ["BUSSINESS \r\n Professtional", "Creative \r\n PROFESSIONAL", "MANUALFACTURING \r\n AND \r\n Design", "ARCHITECTURE \r\n AND Contrucstion", "CERTIFICATIONS"]

    const listSkills = ["Angular", "Javascript", "C#", "Java", "DataAnalysis", "ASP.NET", "NodeJs", "Design Patterns"]

    const renderListItem = (skills) => {
        return skills.map(item => <ImageButtonItem navigation={props.navigation} title={item} />);
    }

    const renderListSkill = (skills) => {
        return skills.map(item => <TouchableOpacity 
            onPress={() =>{
                props.navigation.navigate("SkillDetail")
            }}
            ><Text h5 style={styles.text}>{item}</Text></TouchableOpacity>);
    }

    return (
        <View>
            <View>
                <Text style={{ margin: 5 }}>
                    {props.title}
                </Text>
            </View>
            <ScrollView horizontal={true}>
                {renderListSkill(listSkills)}
            </ScrollView>
            <ScrollView horizontal={true}>
                {renderListItem(skills)}
            </ScrollView>
            <ScrollView horizontal={true}>
                {renderListItem(skills2)}
            </ScrollView>
        </View>
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
