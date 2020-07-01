import React, { Component } from 'react'

import {ThemeProvider} from './themes-provider'
import {AuthenticationProvider} from './authentication-provider'


export default AppProvider = ({children}) => {
    return (
        <ThemeProvider>
            <AuthenticationProvider>
    {children}
            </AuthenticationProvider>
        </ThemeProvider>
    );
}