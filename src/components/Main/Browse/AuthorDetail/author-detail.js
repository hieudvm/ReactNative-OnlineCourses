import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler';
import AllCourses from '../../../Courses/AllCourses/all-courses';
import ScreenContainer from '../../../Common/screen-container';
import ThemedText from '../../../Common/themed-text';
import ListCoursesItem from '../../../Courses/ListCoursesItem/list-courses-item';

const AuthorDetail = (props) => {

    const item = props.route.params.item

    return (
        <ScreenContainer>
            <ScrollView>
                <View style={styles.touch}>
                    <Image style={styles.image} source={require('../../../../../assets/senior-woman-avatar.jpg')} />
                    <View style={styles.text}>
                        <ThemedText h5>
                            {item.name}
                        </ThemedText>
                        <ThemedText>
                            E-Learning.io Author
                        </ThemedText>
                    </View>
                </View>
                <View style={{ marginHorizontal: 50 }}>
                    <Button
                        onPress={props.onPress}
                        title="Follow"
                        color="#841584"
                    // accessibilityLabel="Follow to be notified when new courses are published."
                    />
                </View>
                <View style={{alignItems: 'center'}}>
                    <ThemedText style={{ margin: 6 }}>
                        Follow to be notified when new courses are published.
                    </ThemedText>
                </View>
                <ThemedText style={{ margin: 6 }}>
                    {item.description}
                    </ThemedText>
                <View style={styles.icon}>
                    <TouchableOpacity>
                        <View style={styles.iconItem}>
                            <Icon
                                name='facebook-official' size={30} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.iconItem}>
                            <Icon
                                name='twitter' size={30} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.iconItem}>
                            <Icon
                                name='linkedin-square' size={30} />
                        </View>
                    </TouchableOpacity>
                </View>
                <ScreenContainer>
            <View>
                <FlatList
                    data={item.course}
                    renderItem={({ item }) => <ListCoursesItem navigation={props.navigation} item={item} />}
                />
            </View>
        </ScreenContainer>
            </ScrollView>
        </ScreenContainer>
    )
}

export default AuthorDetail

const styles = StyleSheet.create({
    image: {
        height: 90,
        width: 90,
        margin: 5,
        flex: 2
    },
    touch: {
        alignItems: 'center'

    },
    text: {
        color: 'black',
        alignItems: 'center',
        margin: 6,
        marginTop: 0,
        paddingHorizontal: 10
    },
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
