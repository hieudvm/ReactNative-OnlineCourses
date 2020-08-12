import axios from 'axios';

const likeCourse = (dispatch) => (courseId) => {
    axios.post(`/user/like-course`,{
        courseId: courseId
    })
    .then((Response) => {
        if (Response.status === 200) {
            dispatch({ type: "LIKE_COURSE_SUCCESS", data: Response.data })
        } else {
            dispatch({ type: "LIKE_COURSE_FAIL"})
        }
    }).catch((Error) => {
        dispatch({ type: "LIKE_COURSE_FAIL"})
    })
}

const getCourseLikeStatus = (dispatch) => (courseId) => {
    axios.get(`/user/get-course-like-status/${courseId}`)
    .then((Response) => {
        if (Response.status === 200) {
            dispatch({ type: "GET_COURSE_LIKE_STATUS_SUCCESS", data: Response.data })
        } else {
            dispatch({ type: "GET_COURSE_LIKE_STATUS_FAIL"})
        }
    }).catch((Error) => {
        dispatch({ type: "GET_COURSE_LIKE_STATUS_FAIL"})
    })
}