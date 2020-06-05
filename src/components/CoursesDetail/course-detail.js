import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import VideoPlayer from './VideoPlayer/video-player'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import ListLessons from './ListLessons/list-lessons';

const CourseDetail = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1.5}}>
                <VideoPlayer author="Hai Pham" title="React Native" level="Beginner" released="Apr 16, 2020" duration="30h 5m" />
            </View>
            <ScrollView style={{ flex: 2}}>
                <View style={styles.icon}>
                    <TouchableOpacity>
                        <View style={styles.iconItem}>
                            <View style={{ backgroundColor: 'gray', width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                                <Icon
                                    name='bookmark' size={30} />
                            </View>
                            <Text>Bookmark</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.iconItem}>
                            <View style={{ backgroundColor: 'gray', width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                                <Icon
                                    name='podcast' size={30} />
                            </View>
                            <Text>Add to chanel</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.iconItem}>
                            <View style={{ backgroundColor: 'gray', width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                                <Icon
                                    name='download' size={30} />
                            </View>
                            <Text>Download</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <ListLessons />
                </View>
            </ScrollView>
        </View>

    )
}

export default CourseDetail

const styles = StyleSheet.create({
    icon: {
        margin: 6,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    iconItem: {
        alignItems: 'center',
        margin: 6
    }
})
