import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ScreenContainer from "../../components/Common/screen-container";
import ThemedText from "../../components/Common/themed-text";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import ListItem from "../Common/list-item";
import axios from 'axios';
import { CourseDetailContext } from "../../provider/courseDetail-provider";
import { UserContext } from "../../provider/user-provider";
import { CoursesContext } from "../../provider/courses-provider";




const renderPaymentStatus = (status, message) => {
  if (status) {
    return (<Text>{message}</Text>)
  } else {
    return (<Text>{message}</Text>)
  }
}

const buttonNavigate = (props, item) => {
  return (
    <TouchableOpacity style={styles.button}
      onPress={() => {
        props.navigation.navigate("CourseDetail", { item: item })
      }}
    >
      <Text style={styles.text}>Continue Learning</Text>
    </TouchableOpacity>
  )
}

const CourseDescriptions = (props) => {
  const courseDetailContext = useContext(CourseDetailContext)
  const courseContext = useContext(CoursesContext)

  const item = props.route.params.item;

  const [status, setStatus] = useState(false)
  const [messagePayment, setMessagePayment] = useState("")
  const [subscribeStatus, setSubscribeStatus] = useState("")

  const Image_Http_URL = { uri: item.imageUrl }

  const paymentCourse = (courseId) => {
    console.log(courseId)
    axios.post(`/payment/get-free-courses`, {
      courseId: courseId
    }).then((Response) => {
      const res = Response.status
      if (res === 200) {
        setStatus(true)
      } else {
        setStatus(false)
      }
    }).catch((Error) => {
      setStatus(false)
    })
  }

  useEffect(() => {
    if (courseDetailContext.state.subscribe) {
      console.log("load", courseDetailContext.state.subscribe)
      setSubscribeStatus("Subscribe")
    } else {
      console.log("load", courseDetailContext.state.subscribe)
      setSubscribeStatus("Subscribed")
    }
  }, [])

  return (
    <ScreenContainer>
      <ScreenContainer style={styles.item}>
        <Image source={Image_Http_URL} style={styles.image} />
        <View style={{ margin: 10, marginTop: 0 }}>
          <ThemedText>{item.title}</ThemedText>
          <ThemedText>{item["instructor.user.name"]}</ThemedText>
          <ThemedText
            style={styles.darkThemedText}
          >{`${item.videoNumber} . ${item.totalHours}`}</ThemedText>
        </View>
      </ScreenContainer>
      <View style={{ margin: 6, flex: 8 }}>
        <View style={{ margin: 6, flex: 2, borderBottomColor: "gray", borderBottomWidth: 1, }}>
          <ThemedText>{item.description}</ThemedText>
        </View>
        <View style={{ flex: 2 }}>
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
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (courseDetailContext.state.subscribe) {
                axios.post(`/payment/get-free-courses`, {
                  courseId: item.id
                }).then((Response) => {
                  if (Response.status === 200) {
                    setMessagePayment("Subscribe success!")
                    setSubscribeStatus("Subscribed")
                    props.navigation.navigate("PaymentStatus", { item: item })
                    courseContext.getProcessCourses()
                  } else {
                    setMessagePayment("Has error!")
                  }
                }).catch((Error) => {
                  setMessagePayment("Has error!")
                })
                console.log(status)
              } else {
                setMessagePayment("Course is subscribed!")
              }

            }}
          >
            <Text style={styles.text}>{subscribeStatus}</Text>
          </TouchableOpacity>
          <View>
            {renderPaymentStatus(status, messagePayment)}
          </View>
          {!courseDetailContext.state.subscribe ? buttonNavigate(props, item) : <View></View>}
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
    flex: 1
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
