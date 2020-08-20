import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ScreenContainer from "../../components/Common/screen-container";
import ThemedText from "../../components/Common/themed-text";
import { FlatList, TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import ListItem from "../Common/list-item";
import axios from 'axios';
import { CourseDetailContext } from "../../provider/courseDetail-provider";
import { CoursesContext } from "../../provider/courses-provider";
import { FavouritesContext } from "../../provider/favourites-provider";
import { VideoContext } from "../../provider/video-provider";




const renderPaymentStatus = (status, message) => {
  if (status) {
    return (<Text>{message}</Text>)
  } else {
    return (<Text>{message}</Text>)
  }
}

const buttonNavigate = (props, item, favoriteContext) => {
  return (
    <TouchableOpacity style={styles.button}
      onPress={() => {
        favoriteContext.getCourseLikeStatus(item.id)
        props.navigation.navigate("CourseDetail", { item: item })
      }}
    >
      <Text style={styles.text}>Continue Learning</Text>
    </TouchableOpacity>
  )
}

const CourseDescriptions = (props) => {
  const videoContext = useContext(VideoContext)
  const favoriteContext = useContext(FavouritesContext)
  const courseDetailContext = useContext(CourseDetailContext)
  const courseContext = useContext(CoursesContext)

  const item = props.route.params.item;

  const [status, setStatus] = useState(false)
  const [messagePayment, setMessagePayment] = useState("")
  const [subscribeStatus, setSubscribeStatus] = useState("")
  const [learned, setLearned] = useState(0)
  const [lessonLearning, setLessonLearning] = useState("")
  const [lessonId, setLessonId] = useState("")

  const Image_Http_URL = { uri: item.imageUrl ? item.imageUrl : item.courseImage }

  useEffect(() => {
    if (courseDetailContext.state.subscribe) {
      setSubscribeStatus("Subscribe")
    } else {
      setSubscribeStatus("Subscribed")
    }
  }, [courseDetailContext.state.subscribe])

  useEffect(() => {
    if (item.id) {
      axios.get(`/course/last-watched-lesson/${item.id}`) 
        .then((Response) => {
          if (Response.status === 200) {
            setLessonId(Response.data.payload.lessonId)
            setLearned(Response.data.payload.currentTime)
          } else {
            setLearned(0)
          }
        }).catch((Error) => {
          setLearned(0)
        })
    }
  }, [item.id])

  useEffect(() => {
    if (lessonId && videoContext.lessonId) {
      axios.get(`/lesson/detail/${item.id}/${lessonId}`)
        .then((Response) => {
          if (Response.status === 200) {
            setLessonLearning(Response.data.payload.name)
          } else {
          }
        }).catch((Error) => {
        })
    }
  }, [lessonId, videoContext.lessonId])

  useEffect(() => {
    if (videoContext.lessonId) {
      axios.get(`/lesson/detail/${item.id}/${videoContext.lessonId}`)
        .then((Response) => {
          if (Response.status === 200) {
            setLessonLearning(Response.data.payload.name)
          } else {
          }
        }).catch((Error) => {
        })
    }
  }, [videoContext.lessonId])

  return (
    <ScreenContainer>
      <ScreenContainer style={styles.item}>
        <Image source={Image_Http_URL} style={styles.image} />
        <View style={{ margin: 10, marginTop: 0 }}>
          <ThemedText>{item.title ? item.title : item.courseTitle}</ThemedText>
          {item.name ? <ThemedText>{item.name ? item.name : item["instructor.user.name"]}</ThemedText> : <ThemedText>{item["instructor.user.name"] ? item["instructor.user.name"] : item.instructorName}</ThemedText>}
          {/* <ThemedText>{item["instructor.user.name"] ? item["instructor.user.name"] : item.instructorName}</ThemedText> */}
          {item.videoNumber ? <ThemedText style={styles.darkThemedText}>{`${item.videoNumber} video . ${item.totalHours} hours`}</ThemedText> : <ThemedText style={styles.darkThemedText}>{`${item.coursePrice} VND . sold ${item.courseSoldNumber}`}</ThemedText>}
        </View>
      </ScreenContainer>
      <View style={{ margin: 6, flex: 8 }}>
        <View style={{ margin: 6, flex: 2, borderBottomColor: "gray", borderBottomWidth: 1, paddingBottom: 6 }}>
          <ScrollView>
            <ThemedText>{item.description}</ThemedText>
          </ScrollView>
        </View>
        <View style={{ flex: 2, borderBottomColor: "gray", borderBottomWidth: 1, paddingBottom: 6 }}>
          <ThemedText style={{ margin: 6 }}>Learn What</ThemedText>
          <ScreenContainer>
            <ScrollView>
              <FlatList
                data={item.learnWhat}
                renderItem={({ item }) => (
                  <ListItem
                    navigation={props.navigation}
                    item={item}
                  />
                )}
              />
            </ScrollView>
          </ScreenContainer>
        </View>
        <View style={{ flex: 6, justifyContent: 'center', alignItems: 'center', }}>

          {!courseDetailContext.state.subscribe ?
            <View style={styles.layout}>
              <Text style={styles.text}>Learning status</Text>
              <Text style={styles.text}>{`Learned: ${Math.ceil(learned/60)} min / ${item.totalHours} hours`}</Text>
              <Text style={styles.text}>{`Lesson is learning: ${lessonLearning}`}</Text>
            </View> : <View></View>}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              axios.get(`/course/get-course-detail/${item.id}/null`).then((Response) => {
                if (Response.status === 200) {
                  props.navigation.navigate("RatingCourse", { item: Response.data.payload })
                } else {
                }
              }).catch((Error) => {
              })
            }}
          >
            <Text style={styles.text}>Show student reviews</Text>
          </TouchableOpacity>
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
          {!courseDetailContext.state.subscribe ? buttonNavigate(props, item, favoriteContext) : <View></View>}
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
  },
  layout: {
    width: 350,
    height: 100,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 3,
    margin: 10,
    padding: 10,
    backgroundColor: 'gray',
    alignItems: 'center',
  }
});
