import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import ScreenContainer from '../../../../Common/screen-container'
import ThemedText from '../../../../Common/themed-text'
import axios from 'axios';

const randomnumber = Math.floor(Math.random() * (700 - 200 + 1)) + 200
const Image_Http_URL = { uri: `https://picsum.photos/${randomnumber}` }

const CategoryItem = (props) => {

    return (
        <ScreenContainer style={styles.item}>
            <TouchableOpacity style={{ flexDirection: 'row' }}
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
                <Image source={Image_Http_URL} style={styles.image} />
                <View style={{ margin: 10 }}>
                    <ThemedText>{props.item.name}</ThemedText>
                </View>
            </TouchableOpacity>
        </ScreenContainer>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    item: {
        margin: 6,
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 5,
    },
    darkText: {
        color: 'darkgray'
    }
})
