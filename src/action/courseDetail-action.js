import axios from 'axios';

const getCourseDetailWithLession = (dispatch) => (courseId) => {
    axios.get(`/course/detail-with-lesson/${courseId}`)
    .then((Response) => {
        if (Response.status === 200) {
            dispatch({ type: "GET_COURSE_DETAIL_WITH_LESSION_SUCCESS", data: Response.data.payload })
        } else {
            dispatch({ type: "GET_COURSE_DETAIL_WITH_LESSION_FAIL", message: "Cannot get Course Detail!" })
        }
    }).catch((Error) => {
        dispatch({ type: "GET_COURSE_DETAIL_WITH_LESSION_FAIL" , messagge: "Has error!"})
    })
}

const getCourseDetailByCourseIdAndUserId = (dispatch) => (courseId, userId) => {
    axios.get(`/course/detail-with-lesson/${courseId}/${userId}`)
    .then((Response) => {
        if (Response.status === 200) {
            dispatch({ type: "GET_COURSE_DETAIL_BY_COURSEID_AND_USERID_SUCCESS", data: Response.data.payload })
        } else {
            dispatch({ type: "GET_COURSE_DETAIL_BY_COURSEID_AND_USERID_FAIL", message: "Cannot get Course Detail!" })
        }
    }).catch((Error) => {
        dispatch({ type: "GET_COURSE_DETAIL_BY_COURSEID_AND_USERID_FAIL" , messagge: "Has error!"})
    })
}

export {getCourseDetailWithLession, getCourseDetailByCourseIdAndUserId}