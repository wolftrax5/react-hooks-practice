import React , { useState, useEffect } from 'react'


export const Characters = () => {
    const [characters, setCharacters] = useState([])

    useEffect(()=> {
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, [])

    return(
        <div className='characters'>
        {characters.map((character, i) => <h2 key={i}>{character.name}</h2>)}
        </div>
    )
}
