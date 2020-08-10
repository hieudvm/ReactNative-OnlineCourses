import React, { useState, useReducer } from 'react'

const UserContext = React.createContext()

const initialState = {
    isLoading: true,
    
}

const UserProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UserContext.Provider
            value={{
                state,
               
            }}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
