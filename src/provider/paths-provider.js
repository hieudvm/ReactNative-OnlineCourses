import React, { useState } from 'react'
import { paths, newPaths, trendingPaths } from '../resourceContext/resource-context'

const PathsContext = React.createContext()

const PathsProvider = (props) => {
    const [path, setPaths] = useState(paths)

    const [newPath, setNewPaths] = useState(newPaths)

    const [trendingPath, setTrendingPaths] = useState(trendingPaths)
    return (
        <PathsContext.Provider value={{ path, setPaths, newPath, setNewPaths, trendingPath, setTrendingPaths }}>
            {props.children}
        </PathsContext.Provider>
    )
}

export { PathsProvider, PathsContext }

