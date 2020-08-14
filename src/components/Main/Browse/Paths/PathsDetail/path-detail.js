import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import ScreenContainer from '../../../../Common/screen-container'
import ThemedText from '../../../../Common/themed-text'
import { FlatList } from 'react-native-gesture-handler'
import ListCoursesItemForPath from '../../../../Courses/ListCoursesItem/list-courses-item-for-path'

const randomnumber = Math.floor(Math.random() * (700 - 200 + 1)) + 200
const Image_Http_URL = { uri: `https://picsum.photos/${randomnumber}` }

const PathDetail = (props) => {
    const item = props.route.params.item

    return (
        <ScreenContainer>
            <ScreenContainer style={styles.item} >
                <Image source={Image_Http_URL} style={styles.image} />
                <View style={{ margin: 10 }}>
                    <ThemedText>{item.title}</ThemedText>
                    <ThemedText style={styles.darkThemedText}>{`${item.countCourses} . ${item.duration}`}</ThemedText>
                </View>
            </ScreenContainer>
            <View style={{ margin: 6, flex: 1 }}>
                <ThemedText>{item.description}</ThemedText>
            </View>
            <View style={{ flex: 4 }}>
                <ThemedText style={{ margin: 6 }}>Path Courses</ThemedText>
                <ScreenContainer>
                    <View>
                        <FlatList
                            data={item.listCourses}
                            renderItem={({ item }) => <ListCoursesItemForPath navigation={props.navigation} item={item} />}
                        />
                    </View>
                </ScreenContainer>
            </View>
        </ScreenContainer>
    )
}

export default PathDetail

const styles = StyleSheet.create({
    item: {
        margin: 6,
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1
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
