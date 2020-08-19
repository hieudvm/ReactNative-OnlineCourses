import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import ScreenContainer from '../../Common/screen-container'
import ThemedText from '../../Common/themed-text'
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';

const CourseExcerciseItemDetail = (props) => {
    const [excercise, setExcercise] = useState([])
    useEffect(() => {
        if(props.item.id){
            axios.post('/exercise/student/list-exercise-lesson', {
                "lessonId": props.item.id,
            }).then((Response) => {
                if (Response.status === 200) {
                    setExcercise(Response.data.payload.exercises)
                }
            }).catch((Error) => {
            })
        }
    }, [])
    
    return (
        <FlatList
            data={excercise}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.item}
                    onPress={() => {
                    }}
                >
                    <Icon name='file-word-o' size={20} />
                    <ScreenContainer>
                        <View style={{ margin: 10 }}>
                            <ThemedText>{item.title}</ThemedText>
                            <ThemedText style={styles.darkText}>{`${item.numberQuestion} Questions`}</ThemedText>
                        </View>
                    </ScreenContainer>
                </TouchableOpacity>
            )}
        />

    )
}

export default CourseExcerciseItemDetail

const styles = StyleSheet.create({
    item: {
        margin: 6,
        height: 120,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 20,
    },
    darkText: {
        color: 'darkgray'
    }
})
