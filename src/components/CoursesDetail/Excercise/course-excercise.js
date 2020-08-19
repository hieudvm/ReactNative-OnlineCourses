import React from 'react'
import { StyleSheet, Image, View, SectionList, ActivityIndicator } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import CourseExcerciseItem from './course-excercise-item'
import ScreenContainer from '../../Common/screen-container'
import ThemedText from '../../Common/themed-text'

const CourseExcercise = (props) => {
    const item = props.route.params.item
    const Image_Http_URL = { uri: item.imageUrl ? item.imageUrl : item.courseImage }

    return (
        <ScreenContainer>
            <ScreenContainer style={styles.item}>
                <Image source={Image_Http_URL} style={styles.image} />
                <View style={{ margin: 10, marginTop: 0 }}>
                    <ThemedText>{item.title ? item.title : item.courseTitle}</ThemedText>
                    {item.name ? <ThemedText>{item.name ? item.name : item["instructor.user.name"]}</ThemedText> : <ThemedText>{item["instructor.user.name"] ? item["instructor.user.name"] : item.instructorName}</ThemedText>}
                    {item.videoNumber ? <ThemedText style={styles.darkThemedText}>{`${item.videoNumber} video . ${item.totalHours} hours`}</ThemedText> : <ThemedText style={styles.darkThemedText}>{`${item.coursePrice} VND . sold ${item.courseSoldNumber}`}</ThemedText>}
                </View>
            </ScreenContainer>
            <View style={{ margin: 6, flex: 5 }}>
                <View style={{ margin: 6, flex: 2, borderBottomColor: "gray", borderBottomWidth: 1, }}>
                    <ThemedText>{item.description}</ThemedText>
                </View>
                <View style={{ flex: 6 }}>
                    <ThemedText style={{ margin: 6 }}>Lesson Excercise</ThemedText>
                    <ScreenContainer>
                        <View>
                            <FlatList
                                data={item.section}
                                renderItem={({ item }) => (
                                    <CourseExcerciseItem
                                        navigation={props.navigation}
                                        item={item}
                                    />
                                )}
                            />
                        </View>
                    </ScreenContainer>
                </View>
            </View>
        </ScreenContainer>
    )
}
    

export default CourseExcercise

const styles = StyleSheet.create({
    item: {
        margin: 6,
        flexDirection: "row",
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        flex: 1
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    darkText: {
        color: "darkgray",
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 50,
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 20,
        backgroundColor: 'darkgray',
        marginBottom: 10
    },
    text: {
        color: 'white',
    }
})
