export const reducer = (prevState, action) => {
    switch (action.type) {
        case "GET_COURSE_DETAIL_WITH_LESSION_SUCCESS":
            return { ...prevState, isLoading: false, sectionLesson: action.data }
        case "GET_COURSE_DETAIL_WITH_LESSION_FAIL":
            return { ...prevState, isLoading: true}
        default:
            throw new Error();
    }
}