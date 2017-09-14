import axios from 'axios';
const API_KEY = '944416b7';

export const FETCH_MOVIE_DATA = 'FETCH_MOVIE_DATA';

export function fetchMovieData(imdbKey) {
  const request = axios.get(`http://www.omdbapi.com/?i=${imdbKey}&apikey=${API_KEY}`);

  return {
    type: FETCH_MOVIE_DATA,
    payload: request,
  }
}
