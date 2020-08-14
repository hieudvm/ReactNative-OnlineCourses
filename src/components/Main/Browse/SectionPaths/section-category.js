import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';
import ScreenContainer from '../../../Common/screen-container';
import ThemedText from '../../../Common/themed-text';
import axios from 'axios';
import { PathsContext } from '../../../../provider/paths-provider';
import SectionCategoryItem from '../SectionPathsItem/section-category-item';

const SectionCategory = (props) => {
    const [category, setCategory] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const PathContext = useContext(PathsContext)

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


    const renderListItem = (skills) => {
        return skills.map(item => <SectionCategoryItem navigation={props.navigation} item={item} />);
    }
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
                            props.navigation.navigate("AllPaths", {item: PathContext.path})
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
                {renderListItem(category)}
            </ScrollView>
        </ScreenContainer>
    )
}

export default SectionCategory

const styles = StyleSheet.create({})
