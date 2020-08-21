import React, { useState } from 'react';

const VideoContext = React.createContext()

const VideoProvider = (props) => {
    const [videoUrl, setVideoUrl] = useState("");
    const [lessonId, setLessonId] = useState("")
    const [lessonName, setLessonName] = useState("")
    const [courseId, setCourseId] = useState("")

    return (
        <VideoContext.Provider
            value={{ lessonId, setLessonId, videoUrl, setVideoUrl, lessonName, setLessonName, courseId, setCourseId }}
        >
            {props.children}
        </VideoContext.Provider>
    )
}

export { VideoProvider, VideoContext }