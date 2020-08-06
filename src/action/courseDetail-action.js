import axios from 'axios';

const getCourseDetailWithLession = (dispatch) => (courseId) => {
    axios.get(`/course/detail-with-lesson/${courseId}`)
    .then((Response) => {
        if (Response.status === 200) {
            dispatch({ type: "GET_COURSE_DETAIL_WITH_LESSION_SUCCESS", data: Response.data.payload })
        } else {
            dispatch({ type: "GET_COURSE_DETAIL_WITH_LESSION_FAIL" })
        }
    }).catch((Error) => {
        dispatch({ type: "GET_COURSE_DETAIL_WITH_LESSION_FAIL" })
    })
}

export {getCourseDetailWithLession}