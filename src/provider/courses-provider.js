import React, { useState, useEffect } from 'react'
import API from '../../api'

const CoursesContext = React.createContext()

const CoursesProvider = (props) => {
    
    const topNewCourses = []
    const topRatingCourses = []
    const topSellingCourses = []

    const [isLoading, setIsLoading] = useState(true)
    const [learningCourseIds, setLearningCourseIds] = useState(new Set())

    const [topNewCourseIds, setTopnNewCourseIds] = useState(topNewCourses)

    const [topRateCourseIds, setTopRateCourseIds] = useState(topRatingCourses)
    const [topSellingCourseIds, setTopSellingCourseIds] = useState(topSellingCourses)
    function addLearningCourse(courseId) {
        console.log('addLearningCourse', courseId, learningCourseIds)
        var newData = new Set(learningCourseIds.add(courseId))
        console.log('newData', newData)
        setLearningCourseIds(newData)
    }

    return (
        <CoursesContext.Provider
            value={{
                learningCourseIds,
                setLearningCourseIds,
                topNewCourseIds,
                setTopnNewCourseIds,
                topRateCourseIds,
                setTopRateCourseIds,
                topSellingCourseIds,
                addLearningCourse,
                setTopSellingCourseIds,
                isLoading,
                setIsLoading
            }}>
            {props.children}
        </CoursesContext.Provider>
    )
}

export { CoursesContext, CoursesProvider }
