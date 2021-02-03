import React, {useState, useContext} from "react";
import ThemeContext from '../../context/ThemeContext';


export const Header = () => {
    const [darkmode, setDarckMode] = useState(false);
    const color = useContext(ThemeContext);

    const handleClick = () => {
        setDarckMode(!darkmode);
    }

    return(
        <div className='Header'>
            <h1 style={ {color} }>React Hooks</h1>
            <button type='button' onClick={handleClick}>{darkmode ? 'Dark Mode' : 'Ligth Mode'}</button>
            <button type='button' onClick={()=> setDarckMode(!darkmode)}>{darkmode ? 'Dark Mode 2' : 'Ligth Mode 2'}</button>
        </div>
    );
}

