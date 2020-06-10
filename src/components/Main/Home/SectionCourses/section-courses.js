import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import SectionCoursesItem from '../SectionCoursesItem/section-courses-item'
import Icon from 'react-native-vector-icons/FontAwesome';

const SectionCourses = (props) => {
    const courses = [
        {
            id: 1,
            title: 'React Native',
            author: 'Hai Pham',
            level: 'Advance',
            released: 'May 12, 2020',
            duration: '38 hours'
        },
        {
            id: 2,
            title: 'Android',
            author: 'Huy Nguyen',
            level: 'Beginner',
            released: 'May 12, 2020',
            duration: '30 hours'
        },
        {
            id: 3,
            title: 'IOS',
            author: 'Huy Nguyen',
            level: 'Beginner',
            released: 'May 12, 2020',
            duration: '30 hours'
        }
    ]

    const renderListItem = (courses) => {
        return courses.map(item => <SectionCoursesItem navigation={props.navigation} item={item} />);
    }

    return (
        <View>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'stretch' }}>
                    <Text style={{ margin: 6, flex: 1 }}>
                        {props.title}
                    </Text>
                    <View style={{ backgroundColor: 'lightgray', marginRight: 6, paddingHorizontal: 10, borderRadius: 10 }}>
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.navigate("AllCourses")
                            }}
                            style={{ flexDirection: 'row', alignItems: 'center' }}
                        >
                            <Text style={{ marginRight: 6 }}>
                                See all
                    </Text>
                            <Icon name="angle-right" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView horizontal={true}>
                {renderListItem(courses)}
            </ScrollView>
        </View>
    )
}

export default SectionCourses

const styles = StyleSheet.create({})
