import React, {useState} from 'react'
import courses from '../resourceContext/resource-context'

const HomeContext = React.createContext(courses);    

const HomeProvider = (props) => {
    const [course, setCourse] = useState()
    return <HomeContext.Provider value = {{course, setCourse}} >
        {props.children}
    </HomeContext.Provider>
}

export default {HomeProvider, HomeContext}