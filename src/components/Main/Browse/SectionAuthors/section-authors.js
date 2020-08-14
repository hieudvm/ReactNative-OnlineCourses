import React, { useContext, useEffect } from 'react'
import { StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native'
import SectionAuthorsItem from '../SectionAuthorsItem/section-authors-item'
import ScreenContainer from '../../../Common/screen-container'
import ThemedText from '../../../Common/themed-text'
import { AuthorContext } from '../../../../provider/author-provider'

const renderListItem = (skills, props) => {
    return skills.map(item => <SectionAuthorsItem navigation={props.navigation} item={item} />);
}

const SectionAuthors = (props) => {
    const authorContext = useContext(AuthorContext)

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
                {renderListItem(authorContext.state.allInstructor, props)}
            </ScrollView>
        </ScreenContainer>
    )
}

export default SectionAuthors

const styles = StyleSheet.create({})
