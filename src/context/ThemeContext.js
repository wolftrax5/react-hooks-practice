import React , {useState} from 'react'

export const ThemeContext = React.createContext({});

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(false)
    
    return (
    <ThemeContext.Provider value={ {theme, setTheme} }>
            {children}
    </ThemeContext.Provider> )
}

