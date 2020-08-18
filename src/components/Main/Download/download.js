import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import ThemedText from '../../Common/themed-text';
import ScreenContainer from '../../Common/screen-container';
import { FavouritesContext } from '../../../provider/favourites-provider';
import { FlatList } from 'react-native-gesture-handler';
import FavoriteCourseItem from './favorite-course-item';
import { useFocusEffect } from '@react-navigation/native';

const Download = (props) => {
    const favoriteContext = useContext(FavouritesContext)
    const [courses, setCourses] = useState([])
    
    useEffect(() => {
            // favoriteContext.getFavoriteCourses()
            setCourses(favoriteContext.state.data)
        }, [favoriteContext.state.data])

    if (courses.length === 0) {
        return (
            <ScreenContainer style={styles.iconItem}>
                {favoriteContext.state.isLoading && <ActivityIndicator size="small" color="gray" />}
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Icon
                        name='bookmark' size={60} color='darkgray' />
                </View>
                <ThemedText style={{ textAlign: 'center', color: 'darkgray' }}>Courses you favorite will appear here</ThemedText>
            </ScreenContainer>
        )
    } else {
        return (
            <ScreenContainer>
                <FlatList
                    data={courses}
                    renderItem={({ item }) => <FavoriteCourseItem navigation={props.navigation} item={item} />}
                />
            </ScreenContainer>
        )
    }
}

export default Download

const styles = StyleSheet.create({
    iconItem: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center'
    }
})
