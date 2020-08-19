import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import VideoPlayer from './VideoPlayer/video-player'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import ListLessons from './ListLessons/list-lessons';
import ScreenContainer from '../Common/screen-container';
import ThemedText from '../Common/themed-text';
import { FavouritesContext } from '../../provider/favourites-provider';
import { useFocusEffect } from '@react-navigation/native';

const CourseDetail = (props) => {
    const item = props.route.params.item

    return (
        <ScreenContainer>
            <View style={{ flex: 1.8  }}>
                <VideoPlayer navigation={props.navigation} item={item} />
            </View>
            <ScrollView style={{ flex: 2.5 }}>
                <ListLessons navigation={props.navigation}/>
            </ScrollView>
        </ScreenContainer>

    )
}

export default CourseDetail

const styles = StyleSheet.create({
    icon: {
        margin: 6,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    iconItem: {
        alignItems: 'center',
        margin: 6
    }
})
