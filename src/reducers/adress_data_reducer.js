import { FETCH_ADRESS_DATA } from '../actions/index';

export default function(state = { }, action){
    switch (action.type){
        case FETCH_ADRESS_DATA:
            return action.payload.data;
        default:
            return state;

    }
}
