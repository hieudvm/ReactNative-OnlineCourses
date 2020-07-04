import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import AllCourses from '../../../../Courses/AllCourses/all-courses'
import ScreenContainer from '../../../../Common/screen-container'
import ThemedText from '../../../../Common/themed-text'

const PathDetail = (props) => {
    return (
        <ScreenContainer>
            <ScreenContainer style={styles.item} >
                    <Image source={require('../../../../../../assets/Ios.jpg')} style={styles.image} />
                    <View style={{ margin: 10 }}>
                        <ThemedText>React - Native</ThemedText>
                        <ThemedText style={styles.darkThemedText}>40 Course . 50 hours</ThemedText>
                    </View>
            </ScreenContainer>
            <View style={{ margin: 6, flex: 4 }}>
                <ThemedText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</ThemedText>
            </View>
            <View style={{flex: 4}}>
                <ThemedText style={{ margin: 6 }}>Path Courses</ThemedText>
                <AllCourses navigation={props.navigation} />
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
