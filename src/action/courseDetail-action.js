import axios from 'axios';

const getCourseDetailWithLession = (dispatch) => (courseId) => {
    axios.get(`/course/detail-with-lesson/${courseId}`)
    .then((Response) => {
        if (Response.status === 200) {
            console.log("success")
            dispatch({ type: "GET_COURSE_DETAIL_WITH_LESSION_SUCCESS", data: Response.data.payload })
        } else {
            console.log("fail 1")
            dispatch({ type: "GET_COURSE_DETAIL_WITH_LESSION_FAIL", message: "Cannot get Course Detail!" })
        }
    }).catch((Error) => {
        console.log("fail 2")
        dispatch({ type: "GET_COURSE_DETAIL_WITH_LESSION_FAIL" , messagge: "Has error!"})
    })
}

export {getCourseDetailWithLession}