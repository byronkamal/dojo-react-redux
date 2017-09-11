import { combineReducers } from 'redux';
import AdressDataReducer from './adress_data_reducer';

const rootReducer = combineReducers(
    {
        adressData : AdressDataReducer
    }
);

export default rootReducer;
