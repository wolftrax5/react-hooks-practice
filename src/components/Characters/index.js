import React , { useState, useEffect } from 'react'


export const Characters = () => {
    const [characters, setCharacters] = useState([])

    useEffect(()=> {
        fetch('http://intergalacticdb.me/api/characters')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, [])

    return(
        <div className='characters'>
        {characters.map((character) => <h2>{character.name}</h2>)}
        </div>
    )
}
