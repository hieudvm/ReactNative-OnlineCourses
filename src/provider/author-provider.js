import React, { useState, useReducer } from 'react'
import { reducer } from '../reducer/authors-reducer'
import { getAllInstructor, getInstructorById } from '../action/authors-action'

const AuthorContext = React.createContext()

const initialState = {
    isLoading: true,
    allInstructor: [],
    instructor: {}
}

const AuthorProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    
    return (
        <AuthorContext.Provider
            value={{
                state,
                getAllInstructor: getAllInstructor(dispatch),
                getInstructorById: getInstructorById(dispatch)
            }}
        >
            {props.children}
        </AuthorContext.Provider>
    )
}

export {AuthorContext, AuthorProvider}