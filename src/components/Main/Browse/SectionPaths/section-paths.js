import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import SectionPathsItem from '../SectionPathsItem/section-paths-item'

const SectionPaths = (props) => {

    const listPaths = ["C# Unit Testing with xUnit", "Querying Data with SQL \r\n  from PostgreSQL", "Certified Kubernetes \r\n Administrator (CKA)", "Kubernetes Administration", "CCSP (Certified Cloud \r\n Security Profestional", "Salesforce Certified Platform \r\n Developer I", "Web Security Testing with \r\n Burp Suite", "Beginning Salesforce \r\n Administration"]

    const renderListItem = (skills) => {
        return skills.map(item => <SectionPathsItem title={item} />);
    }
    return (
        <View>
             <View>
                <Text style={{margin: 5}}>
                    {props.title}
                </Text>
            </View>
           <ScrollView horizontal={true}>
                {renderListItem(listPaths)}
            </ScrollView>
        </View>
    )
}

export default SectionPaths

const styles = StyleSheet.create({})
