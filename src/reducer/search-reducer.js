export const reducer = (prevState, action) => {
    switch (action.type) {
        case "SEARCH_SUCCESSED":
            return { ...prevState, isLoading: false, courses: action.data.courses.data, instructors: action.data.instructors.data, totalCourse: action.data.courses.total, totalInstructor: action.data.instructors.total }
        case "SEARCH_FAILED":
            return { ...prevState, isLoading: true, message: action.messageRegister }
        default:
            throw new Error();
    }
}