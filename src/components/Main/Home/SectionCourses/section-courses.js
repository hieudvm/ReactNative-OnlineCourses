import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import SectionCoursesItem from '../SectionCoursesItem/section-courses-item'
import Icon from 'react-native-vector-icons/FontAwesome';
import ThemedText from '../../../Common/themed-text';
import { CoursesContext } from '../../../../provider/courses-provider';
import SectionCoursesLearning from '../SectionCoursesItem/section-courses-learning';

const SectionCourses = (props) => {
    const courseContext = useContext(CoursesContext)
    var item = []

    const renderListItem = (courses, title) => {
        if (title === 'Countinue learning') {
            return courses.map(item => <SectionCoursesLearning navigation={props.navigation} item={item} />);
        } else {
            return courses.map(item => <SectionCoursesItem navigation={props.navigation} item={item} />);
        }
    }

    // High-ordered function: là function trả về 1 function khác
    // Closure: luu giá trị ngoài scope hiện tại vào scope của function
    useEffect(() => {
        courseContext.getTopSellCourses()
        courseContext.getTopNewCourses()
        courseContext.getTopRateCourses()
        courseContext.getProcessCourses()
    }, [])

    const renderListItemCondition = () => {
        if (props.title === 'Top Rating') {
            item = courseContext.state.topRate
            return renderListItem(courseContext.state.topRate, props.title)
        } else if (props.title === 'Top Selling') {
            item = courseContext.state.topSell
            return renderListItem(courseContext.state.topSell, props.title)
        } else if (props.title === 'Top New Courses') {
            item = courseContext.state.topNew
            return renderListItem(courseContext.state.topNew, props.title)
        } 
        else if (props.title === 'Countinue learning') {
            item = courseContext.state.process
            return renderListItem(item, props.title)
        }
    }

    return (
        <View>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'stretch' }}>
                    {courseContext.state.isLoading && <ActivityIndicator size="small" color="gray" />}
                    <ThemedText style={{ margin: 6, flex: 1 }}>
                        {props.title}
                    </ThemedText>
                    <View style={{ backgroundColor: 'lightgray', marginRight: 6, paddingHorizontal: 10, borderRadius: 10 }}>
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.navigate("AllCourses", { item: item })
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
                {renderListItemCondition()}
            </ScrollView>
        </View>
    )
}

export default SectionCourses

const styles = StyleSheet.create({})
