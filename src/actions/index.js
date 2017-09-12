import axios from 'axios';
const API_KEY = '05c938319946ce3086d197b171a41c15';

export const FETCH_ARTIST_DATA = 'FETCH_ARTIST_DATA';

export function fetchArtistData(artistName) {

  const request = axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks${artistName}&api_key=${API_KEY}&format=json`)

  return {
    type: FETCH_ARTIST_DATA,
    payload: request,
  }
}
