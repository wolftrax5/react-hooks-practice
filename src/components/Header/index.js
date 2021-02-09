import React, {useState, useContext} from "react";
import { ThemeContext } from '../../context/ThemeContext';
import { SwitchButton } from '../SwitchButton'

export const Header = () => {
    const [darkmode, setDarckMode] = useState(false);
    const {theme, setTheme} = useContext(ThemeContext);

    const handleClick = () => {
        setDarckMode(!darkmode);
        setTheme(!theme)
    }

    return(
        <div className='Header'>
            <h1>React Hooks</h1>
            <SwitchButton />
            <button type='button' onClick={handleClick}>{darkmode ? 'Dark Mode' : 'Ligth Mode'}</button>
        </div>
    );
}

