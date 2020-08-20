import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CategoryContext = React.createContext()

const CategoryProvider = (props) => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        axios.get('/category/all')
            .then((Response) => {
                if (Response.status === 200) {
                    setCategory(Response.data.payload)
                } else {
                }
            }).catch((Error) => {
            })
    }, [])

    return (
        <CategoryContext.Provider value={{ category, setCategory }}>
            {props.children}
        </CategoryContext.Provider>
    )
}

export { CategoryProvider, CategoryContext }

