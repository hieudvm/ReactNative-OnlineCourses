import React, { useReducer } from 'react'
import { reducer } from '../reducer/courseDetail-reducer'
import { getCourseDetailWithLession } from '../action/courseDetail-action'

const CourseDetailContext = React.createContext()

const initialState = {
    isLoading: true,
    sectionLesson: []
}

const CourseDetailProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    
    return (
        <CourseDetailContext.Provider
            value={{
                state,
                getCourseDetailWithLession: getCourseDetailWithLession(dispatch)
            }}
        >
            {props.children}
        </CourseDetailContext.Provider>
    )
}

export {CourseDetailContext, CourseDetailProvider}