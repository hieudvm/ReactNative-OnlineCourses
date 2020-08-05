export const reducer = (prevState, action) => {
    switch (action.type) {
        case "GET_ALL_INSTRUCTOR_SUCCESS":
            return { ...prevState, isLoading: false, allInstructor: action.data }
        case "GET_INSTRUCTOR_SUCCESS":
            return { ...prevState, isLoading: false, instructor: action.data }
        case "GET_ALL_INSTRUCTOR_FAIL":
            return { ...prevState, isLoading: true}
        case "GET_INSTRUCTOR_FAIL":
            return { ...prevState, isLoading: true }
        default:
            throw new Error();
    }
}