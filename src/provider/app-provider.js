import React, { Component } from 'react'

import { ThemeProvider } from './themes-provider'
import { AuthenticationProvider } from './authentication-provider'

const AppContext = React.createContext();


export default AppProvider = ({ children }) => {
    return (
        <AppContext.Provider>
            <ThemeProvider>
                <AuthenticationProvider>
                    {children}
                </AuthenticationProvider>
            </ThemeProvider>
        </AppContext.Provider>
    );
}