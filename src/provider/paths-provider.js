import React, { useState } from 'react'
import { paths } from '../resourceContext/resource-context'

const PathsContext = React.createContext()

const PathsProvider = (props) => {
    const [paths, setPaths] = useState(paths)

    const [newPaths, setNewPaths] = useState(newPaths)

    const [trendingPaths, setTrendingPaths] = useState(trendingPaths)
    return (
        <PathsProvider value={{ paths, setPaths, newPaths, setNewPaths, trendingPaths, setTrendingPaths }}>
            {props.children}
        </PathsProvider>
    )
}

export { PathsProvider, PathsContext }

