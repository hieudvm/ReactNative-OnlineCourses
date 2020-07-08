import React, { useState } from 'react'
import {coursesData, newCourses, recommendedCourses} from '../resourceContext/resource-context'

const CoursesContext = React.createContext()

const CoursesProvider = (props) => {

    const [courses, setCourses] = useState(coursesData)

    const [courseIds, setCourseIds] = useState(courses.id)

    const [learningCourseIds, setLearningCourseIds] = useState(new Set())

    const [newReleaseCourseIds, setNewReleaseCourseIds] = useState(newCourses)

    const [recommendedCourseIds, setRecommendedCourseIds] = useState(recommendedCourses)

    function addLearningCourse(courseId) {
        console.log('addLearningCourse', courseId, learningCourseIds)
        var newData = new Set(learningCourseIds.add(courseId))
        console.log('newData', newData)
        setLearningCourseIds(newData)
    }

    return (
        <CoursesContext.Provider
            value={{
                courses,
                setCourses,
                learningCourseIds,
                setLearningCourseIds,
                newReleaseCourseIds,
                setNewReleaseCourseIds,
                recommendedCourseIds,
                setRecommendedCourseIds,
                addLearningCourse,
                courseIds,
            }}>
            {props.children}
        </CoursesContext.Provider>
    )
}

export { CoursesContext, CoursesProvider }
