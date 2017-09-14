import { combineReducers } from 'redux';
import CepDataReducer from './cep_data_reducer';

const rootReducer = combineReducers({
  cepData: CepDataReducer,
});

export default rootReducer;
