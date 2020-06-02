import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import SectionAuthorsItem from '../SectionAuthorsItem/section-authors-item'
import { Text } from 'react-native-elements'


const SectionAuthors = (props) => {

    const listAuthors = ["Hieu Duong", "Hai Pham", "Tuan Mai", "Vu Nguyen", "Tuyen Pham", "Loc Truong", "Huy Nguyen", "Anh Tran"]

    const renderListItem = (skills) => {
        return skills.map(item => <SectionAuthorsItem title={item} />);
    }
    
    return (
        <View>
            <View>
                <Text style={{margin: 5}}>
                    {props.title}
                </Text>
            </View>
           <ScrollView horizontal={true}>
                {renderListItem(listAuthors)}
            </ScrollView>
        </View>
    )
}

export default SectionAuthors

const styles = StyleSheet.create({})
