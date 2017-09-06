import { combineReducers } from 'redux';
import StarterReducer from './starter-reducer';

const rootReducer = combineReducers({
  starter: StarterReducer
});

export default rootReducer;
