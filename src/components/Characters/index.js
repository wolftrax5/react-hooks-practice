import React , { useState, useEffect, useReducer } from 'react'

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites:[...state.favorites, action.payload]
            };
            default:
                return state;
    }
}

export const Characters = () => {
    const [characters, setCharacters] = useState([])

    const [reducerState, dispatch] = useReducer(favoriteReducer, initialState);

    useEffect(()=> {
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, [])

    const handlerClick = (favorite) => {
        dispatch({type: 'ADD_TO_FAVORITE', payload: favorite })
    }

    return(
        <div className='characters'>
        {reducerState.favorites.map(fav => (
            <li key={fav.created}>
                    {fav.name}
            </li>
        ))}
        {characters.map((character) => (
            <div key={character.name} 
                 className='characters__detail'>
                <h2 >{character.name}</h2>
                <button 
                    type='button'
                    onClick={()=>handlerClick(character)}>Add to Fav</button>
            </div>
        ))}
        </div>
    )
}
