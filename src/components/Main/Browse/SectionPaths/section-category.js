import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';
import ScreenContainer from '../../../Common/screen-container';
import ThemedText from '../../../Common/themed-text';
import axios from 'axios';
import SectionCategoryItem from '../SectionPathsItem/section-category-item';
import { UserContext } from '../../../../provider/user-provider';


const renderListItem = (skills, props) => {
    return skills.map(item => <SectionCategoryItem navigation={props.navigation} item={item} />);
}
const SectionCategory = (props) => {
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
            {isLoading && <ActivityIndicator size="small" color="gray" />}
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'stretch' }}>
                <ThemedText style={{ margin: 6, flex: 1 }}>
                    {props.title}
                </ThemedText>
                <View style={{ backgroundColor: 'lightgray', marginRight: 6, paddingHorizontal: 10, borderRadius: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => {
                            props.navigation.navigate("AllCategory", {item: category})
                        }}
                    >
                        <Text style={{ marginRight: 6 }}>
                            See all
                    </Text>
                        <Icon name="angle-right" />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView horizontal={true}>
                {renderListItem(category, props)}
            </ScrollView>
        </ScreenContainer>
    )
}

export default SectionCategory

const styles = StyleSheet.create({})
