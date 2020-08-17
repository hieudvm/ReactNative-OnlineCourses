import React, { useReducer } from 'react'
import { reducer } from '../reducer/courseDetail-reducer'
import { getCourseDetailWithLession, getCourseDetailByCourseIdAndUserId } from '../action/courseDetail-action'

const CourseDetailContext = React.createContext()

const initialState = {
    isLoading: true,
    subscribe: true,
    sectionLesson: [],
    descritions: []
}

const CourseDetailProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    
    return (
        <CourseDetailContext.Provider
            value={{
                state,
                getCourseDetailWithLession: getCourseDetailWithLession(dispatch),
                getCourseDetailByCourseIdAndUserId: getCourseDetailByCourseIdAndUserId(dispatch)
            }}
        >
            {props.children}
        </CourseDetailContext.Provider>
    )
}

export {CourseDetailContext, CourseDetailProvider}