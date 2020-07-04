import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import SectionAuthorsItem from '../SectionAuthorsItem/section-authors-item'
import { Text } from 'react-native-elements'
import ScreenContainer from '../../../Common/screen-container'
import ThemedText from '../../../Common/themed-text'


const SectionAuthors = (props) => {

    const listAuthors = ["Hieu Duong", "Hai Pham", "Tuan Mai", "Vu Nguyen", "Tuyen Pham", "Loc Truong", "Huy Nguyen", "Anh Tran"]

    const renderListItem = (skills) => {
        return skills.map(item => <SectionAuthorsItem navigation={props.navigation} title={item} />);
    }
    
    return (
        <ScreenContainer>
            <View>
                <ThemedText style={{margin: 5}}>
                    {props.title}
                </ThemedText>
            </View>
           <ScrollView horizontal={true}>
                {renderListItem(listAuthors)}
            </ScrollView>
        </ScreenContainer>
    )
}

export default SectionAuthors

const styles = StyleSheet.create({})
