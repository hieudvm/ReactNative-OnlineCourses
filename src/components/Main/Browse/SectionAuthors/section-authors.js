import React, { useContext } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import SectionAuthorsItem from '../SectionAuthorsItem/section-authors-item'
import { Text } from 'react-native-elements'
import ScreenContainer from '../../../Common/screen-container'
import ThemedText from '../../../Common/themed-text'
import { AuthorContext } from '../../../../provider/author-provider'


const SectionAuthors = (props) => {

    const authorContext = useContext(AuthorContext)

    const renderListItem = (skills) => {
        return skills.map(item => <SectionAuthorsItem navigation={props.navigation} item={item} />);
    }
    
    return (
        <ScreenContainer>
            <View>
                <ThemedText style={{margin: 5}}>
                    {props.title}
                </ThemedText>
            </View>
           <ScrollView horizontal={true}>
                {renderListItem(authorContext.author)}
            </ScrollView>
        </ScreenContainer>
    )
}

export default SectionAuthors

const styles = StyleSheet.create({})
