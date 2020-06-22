import React, {useState} from 'react'

const homeContext = React.createContext();    

const homeProvider = (props) => {
    const [courses, setCourses] = useState()
    return <homeProvider.Provider value = {{courses, setCourses}} >

    </homeProvider.Provider>
}

export default {homeProvider, homeContext}