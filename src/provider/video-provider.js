import React, { useState } from 'react';

const VideoContext = React.createContext()

const VideoProvider = (props) => {
    const [videoUrl, setVideoUrl] = useState("");

    return (
        <VideoContext.Provider
            value={{ videoUrl, setVideoUrl }}
        >
            {props.children}
        </VideoContext.Provider>
    )
}

export {VideoProvider, VideoContext }