import React, {useState} from "react";

export const Header = () => {
    const [darkmode, setDarckMode] = useState(false);

    const handleClick = () => {
        setDarckMode(!darkmode);
    }

    return(
        <div className='Header'>
            <h1>React Hooks</h1>
            <button type='button' onClick={handleClick}>{darkmode ? 'Dark Mode' : 'Ligth Mode'}</button>
            <button type='button' onClick={()=> setDarckMode(!darkmode)}>{darkmode ? 'Dark Mode 2' : 'Ligth Mode 2'}</button>
        </div>
    );
}

