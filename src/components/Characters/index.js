import React , { useReducer } from 'react'
import  { useCharactersList }from '../../hooks/useFetchData'


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

    const [reducerState, dispatch] = useReducer(favoriteReducer, initialState);

    const { characerListState, loading , showFixed} = useCharactersList();

    const handlerClick = (favorite) => {
        dispatch({type: 'ADD_TO_FAVORITE', payload: favorite })
    }

    return(
        <div className='characters'>
        {`${loading}`}
        {reducerState.favorites.map((fav) => (
            <li key={fav.id+fav.name}>
                    {fav.name}
            </li>
        ))}
        {characerListState.charactersList.map((character) => (
            <div key={character.id}
                className='characters__detail'>
                <h2 >{character.name}</h2>
                {`${showFixed}`}
                <img loading="lazy" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name}/>
                <button
                    type='button'
                    onClick={()=>handlerClick(character)}>Add to Fav</button>
            </div>
        ))}
        </div>
    )
}
