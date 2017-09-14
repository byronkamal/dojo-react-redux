import axios from 'axios';

export const FETCH_CEP_DATA = 'FETCH_CEP_DATA';

export function fetchCepData(cepId){
  const request = axios.get(`https://viacep.com.br/ws/${cepId}/json/`);

  return {
    type: FETCH_CEP_DATA,
    payload: request,
  }
}
