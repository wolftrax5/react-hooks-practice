import React, { useContext } from "react";
import { ThemeContext } from '../../context/ThemeContext';
import { SwitchButton } from '../SwitchButton'

export const Header = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    const handleClick = () => {
        setTheme(!theme)
    }

    return(
        <div className='Header'>
            <h1>Marvelopoliz</h1>
            <SwitchButton switchFunc={handleClick}  value={theme} />
        </div>
    );
}

