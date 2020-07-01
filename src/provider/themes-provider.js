import React, { useState } from 'react';

const ThemeContext = React.createContext()

const themes = {
    light: {
        backgroundColor: 'white',
        forcegroundColor: 'black',
    },
    dark: {
        backgroundColor: 'black',
        forcegroundColor: 'white',
    }
}

const ThemeProvider = ({children})=>{
    const [theme, setTheme] = useState(themes.light);

    return (
        <ThemeContext.Provider
        value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
    )
}

export {themes, ThemeProvider, ThemeContext}