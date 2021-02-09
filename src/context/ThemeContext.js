import React , {useState, useEffect} from 'react'

export const ThemeContext = React.createContext({});

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(false)

    useEffect(() => {
        // get the css var values
        let back = getComputedStyle(document.documentElement)
        .getPropertyValue('--main-bg-color'); 
        let font = getComputedStyle(document.documentElement)
        .getPropertyValue('--main-fnt-color');
        // tooggle the css values
        document.documentElement.style.setProperty('--main-bg-color', font);
        document.documentElement.style.setProperty('--main-fnt-color', back);
    }, [theme])

    return (
    <ThemeContext.Provider value={ {theme, setTheme} }>
            {children}
    </ThemeContext.Provider> )
}

