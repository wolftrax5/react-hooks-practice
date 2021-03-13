import React, {useState, useEffect} from 'react';

import { searchComic } from '../../utils/searchCharacters';
import { useDebounce } from '../../hooks/useDebounce';

export function Comics() {
    // State and setter for search term
  const [searchTerm, setSearchTerm] = useState('');
  // State and setter for search results
  const [results, setResults] = useState([]);
  // State for search status (whether there is a pending API request)
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(
    () => {
      // Make sure we have a value (user has entered something in input)
      if (debouncedSearchTerm) {
        // Set isSearching state
        setIsSearching(true);
        // Fire off our API call
        searchComic(debouncedSearchTerm).then(results => {
          // Set back to false since request finished
          setIsSearching(false);
          // Set results state
          setResults(results);
        });
      } else {
        setResults([]);
      }
    },
    [debouncedSearchTerm]
  );

  // Pretty standard UI with search input and results
  return (
    <div>
      <input
        placeholder="Search Marvel Comics"
        onChange={e => setSearchTerm(e.target.value)}
      />

      {isSearching ? <div>Searching ...</div> :
        (results.map(result => (
        <div key={result.id}>
          <h4>{result.title}</h4>
          <img
            alt={`${result.title} portrait`}
            src={`${result.thumbnail.path}/portrait_incredible.${
              result.thumbnail.extension
            }`}
          />
        </div>
      )))
      }

      
    </div>
  );
}

