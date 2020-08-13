export const reducer = (prevState, action) => {
    switch (action.type) {
        case "LIKE_COURSE_SUCCESS":
            return { ...prevState, isLoading: false, message: action.data.message, likeStatus: action.data.likeStatus }
        case "GET_COURSE_LIKE_STATUS_SUCCESS":
            return { ...prevState, isLoading: false, message: action.data.message, likeStatus: action.data.likeStatus }
        case "GET_FAVORITE_COURSES_SUCCESS":
            return { ...prevState, isLoading: false, data: action.data }
        case "LIKE_COURSE_FAIL":
            return { ...prevState, isLoading: true }
        case "GET_COURSE_LIKE_STATUS_FAIL":
            return { ...prevState, isLoading: true }
        case "GET_FAVORITE_COURSES_FAIL":
            return { ...prevState, isLoading: true }
        default:
            throw new Error();
    }
}