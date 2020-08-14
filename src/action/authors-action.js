import axios from 'axios';

const getAllInstructor = (dispatch) => () => {
    axios.get('/instructor')
    .then((Response) => {
        if (Response.status === 200) {
            dispatch({ type: "GET_ALL_INSTRUCTOR_SUCCESS", data: Response.data.payload })
        } else {
            dispatch({ type: "GET_ALL_INSTRUCTOR_FAIL" })
        }
    }).catch((Error) => {
        dispatch({ type: "GET_ALL_INSTRUCTOR_FAIL" })
    })
}

const getInstructorById = (dispatch) => (id) => {
    axios.get(`/instructor/detail/${id}`)
    .then((Response) => {
        if (Response.status === 200) {
            dispatch({ type: "GET_INSTRUCTOR_SUCCESS", data: Response.data.payload })
        } else {
            dispatch({ type: "GET_INSTRUCTOR_FAIL" })
        }
    }).catch((Error) => {
        dispatch({ type: "GET_INSTRUCTOR_FAIL" })
    })
}

export {getAllInstructor, getInstructorById}