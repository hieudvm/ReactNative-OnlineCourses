import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ImageButtonItem from '../../../Common/image-button-item'

const SectionSkills = (props) => {

    const skills = ["CONFERENCES", "<Software> \r\n Development", "IT", "Information \r\n AND \r\n CYBER SECURITY", "DATA Professional"]

    const skills2 = ["BUSSINESS \r\n Professtional", "Creative \r\n PROFESSIONAL", "MANUALFACTURING \r\n AND \r\n Design", "ARCHITECTURE \r\n AND Contrucstion", "CERTIFICATIONS"]

    const listSkills = ["Angular", "Javascript", "C#", "Java", "DataAnalysis", "ASP.NET", "NodeJs", "Design Patterns"]

    const renderListItem = (skills) => {
        return skills.map(item => <ImageButtonItem title={item} />);
    }

    const renderListSkill = (skills) => {
        return skills.map(item => <Text style={styles.text}>{item}</Text>);
    }

    return (
        <View>
            <View>
                <Text>
                    {props.title}
                </Text>
            </View>
            <ScrollView horizontal={true} style={{margin:10,}}>
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
        margin: 4
    }
})
