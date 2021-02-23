import React from 'react';

export const Search = ({search, serchInput, handlerSearch}) => {
    return (
        <div>
            <input type="text" value={search} onChange ={handlerSearch} ref={serchInput}/>
        </div>
    );
}

