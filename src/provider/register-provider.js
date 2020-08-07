import React, { useReducer } from 'react'
import {reducer} from '../../src/reducer/authentication-reducer'
import { sendActiveEmail, register } from '../action/register-action';

const RegisterContext = React.createContext();

const initialState = {
    isAuthenticated: false,
    message: ""
}

const RegisterProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)
   
    return (
        <RegisterContext.Provider
            value={{ state, 
                register: register(dispatch),
                sendActiveEmail: sendActiveEmail(dispatch)
            }}
        >
            {props.children}
        </RegisterContext.Provider>
    )
}

export { RegisterProvider, RegisterContext }
