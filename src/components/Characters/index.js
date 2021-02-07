import React , { useState, useEffect, useReducer } from 'react'
import md5 from 'md5';

const timestamp = '1';
const PrivateKey = process.env.REACT_APP_API_MARVEL_KEY_PRIVATE
const PublicKey = process.env.REACT_APP_API_MARVEL_KEY_PUBLIC
const temphas= `${timestamp}${PrivateKey}${PublicKey}`
 // md5(ts+privateKey+publicKey)
const Apihash = md5(temphas)
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
        console.log(PrivateKey)
        console.log(PublicKey)
        fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${PublicKey}&hash=${Apihash}`)
            .then(response => response.json())
            .then(response => setCharacters(response.data.results))
    }, [])

    const handlerClick = (favorite) => {
        dispatch({type: 'ADD_TO_FAVORITE', payload: favorite })
    }

    return(
        <div className='characters'>
        {reducerState.favorites.map((fav) => (
            <li key={fav.id+fav.name}>
                    {fav.name}
            </li>
        ))}
        {characters.map((character) => (
            <div key={character.id} 
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
