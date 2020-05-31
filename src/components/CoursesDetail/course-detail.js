import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import VideoPlayer from './VideoPlayer/video-player'

const CourseDetail = (props) => {
    return (
        <View style={{flex: 1}}>
           <VideoPlayer author= "Hai Pham" title= "React Native" level = "Beginner" released= "Apr 16, 2020" duration= "30h 5m" />
        </View>
    )
}

export default CourseDetail

const styles = StyleSheet.create({})
