import md5 from 'md5';
const TIMESTAMP = '1';
const PRIVATEKEY = process.env.REACT_APP_API_MARVEL_KEY_PRIVATE
const PUBLICKEY = process.env.REACT_APP_API_MARVEL_KEY_PUBLIC
const URL = process.env.REACT_APP_API_MARVEL_URL
// md5(ts+privateKey+PUBLICKEY)
const APIHASH = md5(`${TIMESTAMP}${PRIVATEKEY}${PUBLICKEY}`)


export function searchComic(search){
    return fetch(`${URL}comics?ts=${TIMESTAMP}&apikey=${PUBLICKEY}&hash=${APIHASH}&titleStartsWith=${search}`,
        {
            method: 'GET'
        }
        )
        .then(r => r.json())
        .then(r => r.data.results)
        .catch(error => {
            console.error(error);
            return [];
        });
}
