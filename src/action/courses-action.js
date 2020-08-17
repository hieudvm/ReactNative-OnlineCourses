import axios from 'axios';

const getTopSellCourses = (dispatch) => () => {
    axios.post('/course/top-sell', {
        "limit": 15,
        "page": 1
    }).then((Response) => {
        if (Response.status === 200) {
            dispatch({ type: "GET_TOP_SELL_COURSES_SUCCESS", data: Response.data.payload })
        } else {
            dispatch({ type: "GET_COURSES_FAIL" })
        }
    }).catch((Error) => {
        dispatch({ type: "GET_COURSES_FAIL" })
    })
}

const getTopNewCourses = (dispatch) => () => {
    axios.post('/course/top-new', {
        "limit": 15,
        "page": 1
    }).then((Response) => {
        if (Response.status === 200) {
            dispatch({ type: "GET_TOP_NEW_COURSES_SUCCESS", data: Response.data.payload })
        } else {
            dispatch({ type: "GET_COURSES_FAIL" })
        }
    }).catch((Error) => {
        dispatch({ type: "GET_COURSES_FAIL" })
    })
}

const getTopRateCourses = (dispatch) => () => {
    axios.post('/course/top-rate', {
        "limit": 15,
        "page": 1
    }).then((Response) => {
        if (Response.status === 200) {
            dispatch({ type: "GET_TOP_RATE_COURSES_SUCCESS", data: Response.data.payload })
        } else {
            dispatch({ type: "GET_COURSES_FAIL" })
        }
    }).catch((Error) => {
        dispatch({ type: "GET_COURSES_FAIL" })
    })
}

const getProcessCourses = (dispatch) => () => {
    axios.get('/user/get-process-courses')
        .then((Response) => {
            if (Response.status === 200) {
                dispatch({ type: "GET_PROCESS_COURSES_SUCCESS", data: Response.data.payload })
            } else {
                dispatch({ type: "GET_COURSES_FAIL" })
            }
        }).catch((Error) => {
            dispatch({ type: "GET_COURSES_FAIL" })
        })
}

const getCourseInformation = (dispatch) => (id) => {
    axios.get('/course/get-course-info', {
        params: {
          id: id
        }})
        .then((Response) => {
            if (Response.status === 200) {
                dispatch({ type: "GET_COURSE_INFORMAION_SUCCESS", data: Response.data.payload })
            } else {
                dispatch({ type: "GET_COURSES_FAIL" })
            }
        }).catch((Error) => {
            dispatch({ type: "GET_COURSES_FAIL" })
        })
}

export { getProcessCourses, getTopNewCourses, getTopRateCourses, getTopSellCourses, getCourseInformation }

