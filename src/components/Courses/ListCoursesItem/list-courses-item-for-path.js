import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import ScreenContainer from '../../Common/screen-container'
import ThemedText from '../../Common/themed-text'
import { Rating } from 'react-native-elements'

const randomnumber = Math.floor(Math.random() * (700 - 200 + 1)) + 200
const Image_Http_URL = { uri: `https://picsum.photos/${randomnumber}` }

const ListCoursesItemForPath = (props) => {
    return (
        <ScreenContainer>
            <TouchableOpacity style={styles.item}
                onPress={() => {
                    props.navigation.navigate("CourseDetail", { item: props.item })
                }}
            >
                <Image source={Image_Http_URL} style={styles.image} />
                <ScreenContainer>
                    <View style={{ margin: 6 }}>
                        <ThemedText>{props.item.title}</ThemedText>
                        {props.item.name ? <ThemedText>{props.item.name ? props.item.name : props.item["instructor.user.name"]}</ThemedText> : <ThemedText>{props.item["instructor.user.name"] ? props.item["instructor.user.name"] : props.item.instructorName}</ThemedText>}
                        <ThemedText style={styles.darkText}>{props.item.price} VND . {props.item.videoNumber} video . {props.item.totalHours} hours </ThemedText>
                        <Rating imageSize={20} fractions="{1}" startingValue={props.item.ratedNumber} />
                    </View>
                </ScreenContainer>
            </TouchableOpacity>
        </ScreenContainer>
    )
}

export default ListCoursesItemForPath

const styles = StyleSheet.create({
    item: {
        margin: 6,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 0
    },
    darkText: {
        color: 'darkgray'
    }
})
