import React from 'react'
import './SwitchButton.css'

export const SwitchButton = ({switchFunc, value}) => {
    return(
        <label className="switch">
            <input type="checkbox"  checked={value} onChange={switchFunc} />
            <span className="slider"></span>
        </label>
    )
}
