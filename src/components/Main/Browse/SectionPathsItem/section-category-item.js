import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import ScreenContainer from '../../../Common/screen-container'
import ThemedText from '../../../Common/themed-text'
import axios from 'axios';

const randomnumber = Math.floor(Math.random() * (700 - 200 + 1)) + 200
const Image_Http_URL = { uri: `https://picsum.photos/${randomnumber}` }

const SectionCategoryItem = (props) => {
    return (
        <ScreenContainer>
            <TouchableOpacity
                style={styles.touch}
                onPress={() => {
                    axios.post('/course/search', {
                        "keyword": "",
                        "opt": {
                          "sort": {
                            "attribute": "price",
                            "rule": "ASC"
                          },
                          "category": [
                            props.item.id
                          ],
                        "limit": 10,
                        "offset": 1
                      }
                    }).then((Response) => {
                        if (Response.status === 200) {
                            props.navigation.navigate("AllCourses", { item: Response.data.payload.rows })
                        }
                    }).catch((Error) => {
                    })
                }}
            >
                <Image style={styles.image} source={Image_Http_URL} />
                <View style={styles.text}>
                    <ThemedText h5>
                        {props.item.name}
                    </ThemedText>
                </View>
            </TouchableOpacity>

        </ScreenContainer>
    )
}

export default SectionCategoryItem

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 250,
        margin: 6,
        marginBottom: 0,
        flex: -3
    },
    touch: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',

    },
    text: {
        width: 250,
        flex: 3,
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignContent: 'center',
        margin: 6,
        marginTop: 0,
        padding: 10,
        paddingHorizontal: 20
    }
})
