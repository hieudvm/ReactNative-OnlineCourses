import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import SectionPathsItem from '../SectionPathsItem/section-paths-item'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';

const SectionPaths = (props) => {

    const listPaths = ["C# Unit Testing with xUnit", "Querying Data with SQL \r\n  from PostgreSQL", "Certified Kubernetes \r\n Administrator (CKA)", "Kubernetes Administration", "CCSP (Certified Cloud \r\n Security Profestional", "Salesforce Certified Platform \r\n Developer I", "Web Security Testing with \r\n Burp Suite", "Beginning Salesforce \r\n Administration"]

    const renderListItem = (skills) => {
        return skills.map(item => <SectionPathsItem navigation={props.navigation} title={item} />);
    }
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'stretch' }}>
                <Text style={{ margin: 6, flex: 1 }}>
                    {props.title}
                </Text>
                <View style={{ backgroundColor: 'lightgray', marginRight: 6, paddingHorizontal: 10, borderRadius: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => {
                            props.navigation.navigate("AllPaths")
                        }}
                    >
                        <Text style={{ marginRight: 6 }}>
                            See all
                    </Text>
                        <Icon name="angle-right" />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView horizontal={true}>
                {renderListItem(listPaths)}
            </ScrollView>
        </View>
    )
}

export default SectionPaths

const styles = StyleSheet.create({})
