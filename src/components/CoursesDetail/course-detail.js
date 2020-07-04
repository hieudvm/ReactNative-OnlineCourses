import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import VideoPlayer from './VideoPlayer/video-player'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import ListLessons from './ListLessons/list-lessons';
import ScreenContainer from '../Common/screen-container';
import ThemedText from '../Common/themed-text';

const CourseDetail = (props) => {
    return (
        <ScreenContainer>
            <View style={{ flex: 2.5}}>
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
                            <ThemedText>Bookmark</ThemedText>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.iconItem}>
                            <View style={{ backgroundColor: 'gray', width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                                <Icon
                                    name='podcast' size={30} />
                            </View>
                            <ThemedText>Add to chanel</ThemedText>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.iconItem}>
                            <View style={{ backgroundColor: 'gray', width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                                <Icon
                                    name='download' size={30} />
                            </View>
                            <ThemedText>Download</ThemedText>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <ListLessons />
                </View>
            </ScrollView>
        </ScreenContainer>

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
