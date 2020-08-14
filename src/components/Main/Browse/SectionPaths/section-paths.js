import React, { useContext } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import SectionPathsItem from '../SectionPathsItem/section-paths-item'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';
import ScreenContainer from '../../../Common/screen-container';
import ThemedText from '../../../Common/themed-text';
import { PathsContext } from '../../../../provider/paths-provider';

const SectionPaths = (props) => {

    const PathContext = useContext(PathsContext)

    const renderListItem = (skills) => {
        return skills.map(item => <SectionPathsItem navigation={props.navigation} item={item} />);
    }
    return (
        <ScreenContainer>
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
                {renderListItem(PathContext.path)}
            </ScrollView>
        </ScreenContainer>
    )
}

export default SectionPaths

const styles = StyleSheet.create({})
