import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ScreenContainer from "../../components/Common/screen-container";
import ThemedText from "../../components/Common/themed-text";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import ListItem from "../Common/list-item";
import axios from 'axios';

let status = false

const paymentCourse = (courseId) => {
  console.log(courseId)
  axios.post(`/payment/get-free-courses`
  , {
    courseId: courseId
  }
  ).then((Response) => {
    if (Response.status === 200) {
      status = true
      console.log("success")
    } else {
      status = false
    }
  }).catch((Error) => {
    status = false
    console.log(Error)
  })
}

const renderPaymentStatus = (status, message) => {
  if (status) {
    return (<Text>{message}</Text>)
  } else {
    return (<Text>{message}</Text>)
  }
}

const CourseDescriptions = (props) => {
  const item = props.route.params.item;

  const [messagePayment, setMessagePayment] = useState("")
  const [subscribeStatus, setSubscribeStatus] = useState("Subscribe")

  const Image_Http_URL = { uri: item.imageUrl }

  return (
    <ScreenContainer>
      <ScreenContainer style={styles.item}>
        <Image source={Image_Http_URL} style={styles.image} />
        <View style={{ margin: 10 }}>
          <ThemedText>{item.title}</ThemedText>
          <ThemedText
            style={styles.darkThemedText}
          >{`${item.videoNumber} . ${item.totalHours}`}</ThemedText>
        </View>
      </ScreenContainer>
      <View style={{ margin: 6, flex: 1 }}>
        <ThemedText>{item.description}</ThemedText>
      </View>
      <View style={{ flex: 4 }}>
        <ThemedText style={{ margin: 6 }}>Learn What</ThemedText>
        <ScreenContainer>
          <View>
            <FlatList
              data={item.learnWhat}
              renderItem={({ item }) => (
                <ListItem
                  navigation={props.navigation}
                  item={item}
                />
              )}
            />
          </View>
        </ScreenContainer>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            paymentCourse(item.id)
            if(status) {
              setMessagePayment("Subscribe success!")
              setSubscribeStatus("Subscribed")
              props.navigation.navigate("PaymentStatus", { item: item })
            } else {
              setMessagePayment("Has error!")
            }
          }}
        >
          <Text style={styles.text}>{subscribeStatus}</Text>
        </TouchableOpacity>
        <View style={{ margin: 6 }}>
          {renderPaymentStatus(status, messagePayment)}
        </View>
      </View>
    </ScreenContainer>
  );
};

export default CourseDescriptions;

const styles = StyleSheet.create({
  item: {
    margin: 6,
    flexDirection: "row",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  darkText: {
    color: "darkgray",
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
    marginBottom: 10
  },
  text: {
    color: 'white',
  }
});
