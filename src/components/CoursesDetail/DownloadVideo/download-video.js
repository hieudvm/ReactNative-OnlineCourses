import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Button, Image } from 'react-native';
import * as FileSystem from 'expo-file-system';
import ThemedText from '../../Common/themed-text';
import ScreenContainer from '../../Common/screen-container';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');
const DownloadVideo = (props) => {
    const item = props.route.params.item;
    const Image_Http_URL = { uri: item.imageUrl ? item.imageUrl : item.courseImage }
    const url = props.route.params.videoUrl
    const lessonName = props.route.params.lessonName

    const [videoUrl, setVideoUrl] = useState(url)
    const [buttonTitle, setButtonTitle] = useState('Download')
    const [progressValue, setProgressValue] = useState(0)
    const [totalSize, setTotalSize] = useState(0)

    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    // async function getVideoUrl() {
    //   let tmp = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'small.mp4');
    //   let url = tmp.exists ? FileSystem.documentDirectory + 'small.mp4' : videoUrl
    //   return url
    // }

    // getVideoUrl().then((url) => {
    //   setVideoUrl(url)
    // })

    async function downloadVideo() {
        setButtonTitle('Downloading')

        const callback = downloadProgress => {
            setTotalSize(formatBytes(downloadProgress.totalBytesExpectedToWrite))

            var progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
            progress = progress.toFixed(2) * 100
            setProgressValue(progress.toFixed(0))
        };

        const downloadResumable = FileSystem.createDownloadResumable(
            videoUrl,
            FileSystem.documentDirectory + 'small.mp4',
            {},
            callback
        );

        try {
            const { uri } = await downloadResumable.downloadAsync();
            console.log('Finished downloading to ', uri);
            setButtonTitle('Downloaded')
        } catch (e) {
            console.error(e);
        }

    }

    return (
        <ScreenContainer>
            <View style={styles.item}>
                <Image source={Image_Http_URL} style={styles.image} />
                <View style={{ margin: 10, marginTop: 0 }}>
                    <ThemedText>{lessonName}</ThemedText>
                    {item.name ? <ThemedText>{item.name ? item.name : item["instructor.user.name"]}</ThemedText> : <ThemedText>{item["instructor.user.name"] ? item["instructor.user.name"] : item.instructorName}</ThemedText>}
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={downloadVideo}
                >
                    <Text style={styles.text}>{buttonTitle}</Text>
                </TouchableOpacity>
                <View style={styles.layout}>
                    <Text style={styles.text}>Size: {totalSize} </Text>
                    <Text style={styles.text}>Progress: {progressValue} %</Text>
                </View>
            </View>
        </ScreenContainer>
    );
}

export default DownloadVideo

const styles = StyleSheet.create({
    video: {
        width: width,
        height: height / 3
    },
    item: {
        margin: 6,
        flexDirection: "row",
        borderBottomColor: "gray",
        borderBottomWidth: 1,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 50,
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 20,
        backgroundColor: 'darkgray',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    text: {
        color: 'white',
    },
    layout: {
        width: 350,
        height: 50,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 3,
        marginTop: 6,
        paddingLeft: 20,    
        backgroundColor: 'gray',
        alignItems: 'flex-start',
    }
});
