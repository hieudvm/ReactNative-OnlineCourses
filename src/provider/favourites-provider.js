import React, { PureComponent, useState, useReducer } from 'react'
import { reducer } from '../reducer/favorite-reducer'
import { likeCourse, getCourseLikeStatus, getFavoriteCourses } from '../action/favorite-action'

const FavouritesContext = React.createContext()

const initialState = {
    isLoading: true,
    message: "",
    data: [],
    likeStatus: false
}

const FavouritesProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addFavouriteCourse = (courseId) => {
        var newSet = new Set(favouriteCourses.add(courseId))
        setFavouriteCourses(newSet)
    }

    const removeFavouriteCourse = (courseId) => {
        favouriteCourses.delete(courseId)
        var newSet = new Set(favouriteCourses)
        setFavouriteCourses(newSet)
    }

    return (
        <FavouritesContext.Provider
            value={{
                state,
                likeCourse: likeCourse(dispatch),
                getCourseLikeStatus: getCourseLikeStatus(dispatch),
                getFavoriteCourses: getFavoriteCourses(dispatch)
            }}>
            {props.children}
        </FavouritesContext.Provider>
    )
}

export { FavouritesContext, FavouritesProvider }