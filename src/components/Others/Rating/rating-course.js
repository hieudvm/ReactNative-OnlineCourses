import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import ScreenContainer from '../../../components/Common/screen-container'
import ThemedText from '../../../components/Common/themed-text'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import RatingCourseItem from './rating-course-item'

const RatingCourse = (props) => {
    const item = props.route.params.item
    const Image_Http_URL = { uri: item.imageUrl }
    return (
        <ScreenContainer>
            <ScreenContainer style={styles.item} >
                <Image source={Image_Http_URL} style={styles.image} />
                <View style={{ margin: 10 }}>
                    <ThemedText>{item.title}</ThemedText>
                    <ThemedText style={styles.darkThemedText}>{`${item.price} VND . ${item.totalHours} hours`}</ThemedText>
                </View>
            </ScreenContainer>
            <View style={{ margin: 6, flex: 1.5, borderBottomColor: 'gray', borderBottomWidth: 1}}>
                <ThemedText>{item.description}</ThemedText>
            </View>
            <View style={{ margin: 6, flex: 5 }}>
                <ThemedText>Rating</ThemedText>
                <ScrollView>
                    <FlatList
                        data={item.ratings.ratingList.reverse()}
                        renderItem={({ item }) => <RatingCourseItem navigation={props.navigation} item={item} />}
                    />
                </ScrollView>
            </View>
        </ScreenContainer>
    )
}

export default RatingCourse

const styles = StyleSheet.create({
    item: {
        margin: 6,
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    darkText: {
        color: 'darkgray'
    }
})
