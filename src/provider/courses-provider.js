import React, { useState, useReducer } from 'react'
import { reducer } from '../reducer/courses-reducer'
import { getTopSellCourses, getTopNewCourses, getTopRateCourses, getProcessCourses } from '../action/courses-action'

const CoursesContext = React.createContext()

const initialState = {
    isLoading: true,
    topSell: [],
    topNew: [],
    topRate: [],
    process: []
}

const CoursesProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <CoursesContext.Provider
            value={{
                state,
                getTopSellCourses: getTopSellCourses(dispatch),
                getTopNewCourses: getTopNewCourses(dispatch),
                getTopRateCourses: getTopRateCourses(dispatch),
                getProcessCourses: getProcessCourses(dispatch)
            }}>
            {props.children}
        </CoursesContext.Provider>
    )
}

export { CoursesContext, CoursesProvider }
