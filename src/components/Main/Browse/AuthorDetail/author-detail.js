import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import AllCourses from '../../../Courses/AllCourses/all-courses';

const AuthorDetail = (props) => {
    return (
        <View>
            <ScrollView>
                <View style={styles.touch}>
                    <Image style={styles.image} source={require('../../../../../assets/senior-woman-avatar.jpg')} />
                    <View style={styles.text}>
                        <Text h5>
                            {props.title}
                        </Text>
                        <Text>
                            E-Learning.io Author
                        </Text>
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
                    <Text style={{ margin: 6 }}>
                        Follow to be notified when new courses are published.
                    </Text>
                </View>
                <Text style={{ margin: 6 }}>
                    {props.title} is a software developer, consultant, conference speaker, and E-learning.io author.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
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
                <AllCourses />
            </ScrollView>
        </View>
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
        textAlign: 'center',
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
