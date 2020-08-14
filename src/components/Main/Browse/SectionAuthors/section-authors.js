import React, { useContext, useEffect } from 'react'
import { StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native'
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

    useEffect(() => {
        authorContext.getAllInstructor()
    }, [])
    
    return (
        <ScreenContainer>
            <View>
            {authorContext.state.isLoading && <ActivityIndicator size="small" color="gray" />}
                <ThemedText style={{margin: 5}}>
                    {props.title}
                </ThemedText>
            </View>
           <ScrollView horizontal={true}>
                {renderListItem(authorContext.state.allInstructor)}
            </ScrollView>
        </ScreenContainer>
    )
}

export default SectionAuthors

const styles = StyleSheet.create({})
