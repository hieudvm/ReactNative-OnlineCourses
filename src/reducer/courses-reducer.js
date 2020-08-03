export const reducer = (prevState, action) => {
    switch (action.type) {
        case "GET_TOP_SELL_COURSES_SUCCESS":
            return { ...prevState, isLoading: false, topSell: action.data }
        case "GET_TOP_NEW_COURSES_SUCCESS":
            return { ...prevState, isLoading: false, topNew: action.data }
        case "GET_TOP_RATE_COURSES_SUCCESS":
            return { ...prevState, isLoading: false, topRate: action.data }
        case "GET_PROCESS_COURSES_SUCCESS":
            return { ...prevState, isLoading: false, process: action.data }
        case "GET_COURSES_FAIL":
            return { ...prevState, isLoading: true }
        default:
            throw new Error();
    }
}