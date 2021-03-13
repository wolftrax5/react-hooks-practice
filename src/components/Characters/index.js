import React , { useMemo, useReducer , useState, useRef, useCallback} from 'react'
import  { useCharactersList }from '../../hooks/useCharactersList'
import { Search } from '../Search';

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

    const { characerListState, loading } = useCharactersList();

    const  serchInput = useRef('')

    const handlerClick = (favorite) => {
        dispatch({type: 'ADD_TO_FAVORITE', payload: favorite })
    }
    const [search, setSearch] = useState('');

    const handlerSearch = useCallback(()=>{
        setSearch(serchInput.current.value)
    }, [])

    const  filteredCharacters = useMemo(() =>
    characerListState.charactersList.filter((character) => {
        return character.name.toLowerCase().includes(search.toLowerCase())
    }), [characerListState.charactersList, search])

    return(
        <div className='characters'>
        {`${loading}`}
        {reducerState.favorites.map((fav) => (
            <li key={fav.id+fav.name}>
                    {fav.name}
            </li>
        ))}
        <Search search={search}  serchInput={serchInput} handlerSearch={handlerSearch}/>
        {filteredCharacters.map((character) => (
            <div key={character.id}
                className='characters__detail'>
                <h2 >{character.name}</h2>
                <img style={{width:'200px', height: '200px'}} loading="lazy" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name}/>
                <button
                    type='button'
                    onClick={()=>handlerClick(character)}>Add to Fav</button>
            </div>
        ))}
        </div>
    )
}
