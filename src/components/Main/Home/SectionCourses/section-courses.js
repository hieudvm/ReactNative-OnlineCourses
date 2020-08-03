import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import SectionCoursesItem from '../SectionCoursesItem/section-courses-item'
import Icon from 'react-native-vector-icons/FontAwesome';
import ThemedText from '../../../Common/themed-text';
import { CoursesContext } from '../../../../provider/courses-provider';

const SectionCourses = (props) => {
    const courseContext = useContext(CoursesContext)

    const renderListItem = (courses) => {
        return courses.map(item => <SectionCoursesItem navigation={props.navigation} item={item} />);
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
            return renderListItem(courseContext.state.topRate)
        } else if (props.title === 'Top Selling') {
            return renderListItem(courseContext.state.topSell)
        } else if (props.title === 'Top New Courses') {
            return renderListItem(courseContext.state.topNew)
        } else if (props.title === 'Countinue learning') {
            return renderListItem(courseContext.state.process)
        }
    }

    return (
        <View>
            <View>
                {courseContext.state.isLoading && <ActivityIndicator size="small" color="gray" />}
                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'stretch' }}>
                    <ThemedText style={{ margin: 6, flex: 1 }}>
                        {props.title}
                    </ThemedText>
                    <View style={{ backgroundColor: 'lightgray', marginRight: 6, paddingHorizontal: 10, borderRadius: 10 }}>
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.navigate("AllCourses", { item: courseContext.courses })
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
