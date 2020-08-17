export const reducer = (prevState, action) => {
    switch (action.type) {
        case "GET_COURSE_DETAIL_WITH_LESSION_SUCCESS":
            return { ...prevState, isLoading: false, subscribe: false, sectionLesson: action.data }
        case "GET_COURSE_DETAIL_WITH_LESSION_FAIL":
            return { ...prevState, isLoading: true, subscribe: true }
        case "GET_COURSE_DETAIL_BY_COURSEID_AND_USERID_SUCCESS":
            return { ...prevState, subscribe: false, descritions: action.data }
        case "GET_COURSE_DETAIL_BY_COURSEID_AND_USERID_FAIL":
            return { ...prevState, subscribe: true }
        default:
            throw new Error();
    }
}