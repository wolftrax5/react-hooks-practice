import { useEffect, useReducer, useState} from 'react';
import md5 from 'md5';
const TIMESTAMP = '1';
const PRIVATEKEY = process.env.REACT_APP_API_MARVEL_KEY_PRIVATE
const PUBLICKEY = process.env.REACT_APP_API_MARVEL_KEY_PUBLIC
const URL = process.env.REACT_APP_API_MARVEL_URL
// md5(ts+privateKey+PUBLICKEY)
const APIHASH = md5(`${TIMESTAMP}${PRIVATEKEY}${PUBLICKEY}`)

/**
 *
 *
 * @return {object} {state_object, bolean}
 */


const INITIAL_LIMIT= 10;
const initialState = {
    offset: 0,
    limit: INITIAL_LIMIT,
    total: 0,
    count: 0,
    charactersList: [],
}

const characterListReducer = (state, action) => {
    switch(action.type) {
        case 'INITIAL_DATA':
            const {results, count, total } = action.payload
            return {
                ...state,
                charactersList: results,
                count,
                total,
            }
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites:[...state.favorites, action.payload]
            };
            default:
                return state;
    }
}

export const useCharactersList = () => {
    const [characerListState, dispatch] = useReducer(characterListReducer, initialState);
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        setLoading(true)
        fetch(`${URL}characters?ts=${TIMESTAMP}&apikey=${PUBLICKEY}&hash=${APIHASH}&limit=${INITIAL_LIMIT}&offset=0`)
            .then(response => response.json())
            .then(response => dispatch({type:'INITIAL_DATA', payload: response.data}))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }, [])

    return { characerListState, loading }
}
