import React, { useState } from 'react';

const VideoContext = React.createContext()

const VideoProvider = (props) => {
    const [videoUrl, setVideoUrl] = useState("");
    const [lessonId, setLessonId] = useState("")

    return (
        <VideoContext.Provider
            value={{ lessonId, setLessonId, videoUrl, setVideoUrl }}
        >
            {props.children}
        </VideoContext.Provider>
    )
}

export { VideoProvider, VideoContext }