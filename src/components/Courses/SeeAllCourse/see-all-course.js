import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';
import ScreenContainer from '../../../components/Common/screen-container';
import ThemedText from '../../Common/themed-text';
import axios from 'axios';
import SectionCategoryItem from '../../Main/Browse/SectionPathsItem/section-category-item';


const renderListItem = (skills, props) => {
    return skills.map(item => <SectionCategoryItem navigation={props.navigation} item={item} />);
}
const SeeAllCourse = (props) => {
    const [category, setCategory] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get('/category/all')
            .then((Response) => {
                if (Response.status === 200) {
                    setCategory(Response.data.payload)
                    setIsLoading(false)
                } else {
                    setIsLoading(true)
                }
            }).catch((Error) => {
                setIsLoading(true)
            })
    }, [])

    return (
        <ScreenContainer>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'stretch' }}>
                <ThemedText style={{ margin: 6, flex: 1 }}>
                    All Category
                </ThemedText>
                <View style={{ backgroundColor: 'lightgray', marginRight: 6, paddingHorizontal: 10, borderRadius: 10 }}>
                </View>
            </View>
            {isLoading && <ActivityIndicator size="small" color="gray" />}
            <ScrollView>
                {renderListItem(category, props)}
            </ScrollView>
        </ScreenContainer>
    )
}

export default SeeAllCourse

const styles = StyleSheet.create({})
