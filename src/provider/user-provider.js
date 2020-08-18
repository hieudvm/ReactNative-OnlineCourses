import React, { useReducer } from 'react'
import { getUserInformation, changePassword, updateUserProfile } from '../action/user-action'
import { reducer } from '../reducer/user-reducer'

const UserContext = React.createContext()

const initialState = {
    isLoading: true,
    isChanged: false,
    userInformation: {},
    messageChange: "",
    messageUpdate: ""
}

const UserProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UserContext.Provider
            value={{
                state,
                getUserInformation: getUserInformation(dispatch),
                changePassword: changePassword(dispatch),
                updateUserProfile: updateUserProfile(dispatch)
            }}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
