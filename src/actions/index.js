/*
Exemplo de Request>:
Melhores Músicas de um Artista:
http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=cher&api_key=05c938319946ce3086d197b171a41c15&format=json
Busca por um artista: [Retorna uma lista de artistas]
http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=05c938319946ce3086d197b171a41c15&format=json
Busca por um artista: [Retorna informações de apenas um artista]
http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=05c938319946ce3086d197b171a41c15&format=json
É sempre bom comentar um exemplo de request pra quem for utilizar o código
e quiser modificar algum parâmetro


*/


import axios from 'axios';
const API_KEY = '05c938319946ce3086d197b171a41c15';

export const FETCH_ARTIST_DATA = 'FETCH_ARTIST_DATA';

export function fetchArtistData(artistName) {
  // o request estava sem o &artist do modelo do request;
  const request = axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${API_KEY}&format=json`)

  return {
    type: FETCH_ARTIST_DATA,
    payload: request,
  }
}
