import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import AllCourses from '../../../../Courses/AllCourses/all-courses'

const PathDetail = (props) => {
    return (
        <View>
            <View style={styles.item} >
                <Image source={require('../../../../../../assets/Ios.jpg')} style={styles.image} />
                <View style={{ margin: 10 }}>
                    <Text>React - Native</Text>
                    <Text style={styles.darkText}>40 Course . 50 hours</Text>
                </View>
            </View>
            <View style={{margin:6}}>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            </View>
            <View>
                <Text style={{ margin: 6 }}>Path Courses</Text>
                <AllCourses navigation={props.navigation} />
            </View>
        </View>
    )
}

export default PathDetail

const styles = StyleSheet.create({
    item: {
        margin: 6,
        height: 60,
        backgroundColor: 'white',
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
