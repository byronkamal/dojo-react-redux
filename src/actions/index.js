import axios from 'axios';


export const FETCH_ADRESS_DATA = 'FETCH_ADRESS_DATA'
export function fetchAdressData(adressString){
    const request = axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${adressString}&sensor=false`);
    return{
        type: FETCH_ADRESS_DATA,
        payload: request,
    }
}
