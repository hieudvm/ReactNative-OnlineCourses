import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import SectionCoursesItem from '../SectionCoursesItem/section-courses-item'
import Icon from 'react-native-vector-icons/FontAwesome';
import ThemedText from '../../../Common/themed-text';
import { CoursesContext } from '../../../../provider/courses-provider';
import API from '../../../../../api'
import axios from 'axios';

const SectionCourses = (props) => {
    const courseContext = useContext(CoursesContext)
    const [topSellCourses, setTopSellCourses] = useState([]);
    const [topRateCourses, setTopRateCourses] = useState([]);
    const [topNewCourses, setTopNewCourses] = useState([]);
    const [courseIsLearning, setCourseIsLearning] = useState([]);
    const renderListItem = (courses) => {
        return courses.map(item => <SectionCoursesItem navigation={props.navigation} item={item} />);
    }

    useEffect(() => {
        getTopSellCourses()
        getTopNewCourses()
        getTopRateCourses()
        getProcessCourses()
    }, [])

    const getTopSellCourses = () => {
        axios.post('/course/top-sell', {
            "limit": 10,
            "page": 1
        }).then((Response) => {
            if (Response.status === 200) {
                courseContext.setIsLoading(false)
                setTopSellCourses(Response.data.payload);
            } else {
                return new Array()
            }
        }).catch((Error) => {
            return new Array()
        })
    }

    const getTopNewCourses = () => {
        axios.post('/course/top-new', {
            "limit": 10,
            "page": 1
        }).then((Response) => {
            if (Response.status === 200) {
                courseContext.setIsLoading(false)
                setTopNewCourses(Response.data.payload);
            } else {
                return new Array()
            }
        }).catch((Error) => {
            return new Array()
        })
    }

    const getTopRateCourses = () => {
        axios.post('/course/top-rate', {
            "limit": 10,
            "page": 1
        }).then((Response) => {
            if (Response.status === 200) {
                courseContext.setIsLoading(false)
                setTopRateCourses(Response.data.payload);
            } else {
                return new Array()
            }
        }).catch((Error) => {
            return new Array()
        })
    }

    const getProcessCourses = () => {
        axios.get('/user/get-process-courses')
            .then((Response) => {
                if (Response.status === 200) {
                    courseContext.setIsLoading(false)
                    setCourseIsLearning(Response.data.payload);
                } else {
                    return new Array()
                }
            }).catch((Error) => {
                return new Array()
            })
    }

    const renderListItemCondition = () => {
        if (props.title === 'Top Rating') {
            return renderListItem(topRateCourses)
        } else if (props.title === 'Top Selling') {
            return renderListItem(topSellCourses)
        } else if (props.title === 'Top New Courses') {
            return renderListItem(topNewCourses)
        } else if (props.title === 'Countinue learning') {
            return renderListItem(courseIsLearning)
        }
    }

    return (
        <View>
            <View>
                {courseContext.isLoading && <ActivityIndicator size="small" color="gray" />}
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
