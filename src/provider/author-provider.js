import React, { useState } from 'react'
import { authors } from '../resourceContext/resource-context'

const AuthorContext = React.createContext()

const AuthorProvider = (props) => {

    const [author, setAuthor] = useState(authors)

    return (
        <AuthorContext.Provider
            value={{author,setAuthor}}
        >
            {props.children}
        </AuthorContext.Provider>
    )
}

export {AuthorContext, AuthorProvider}