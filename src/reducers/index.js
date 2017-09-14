import { combineReducers } from 'redux';
import MovieDataReducer from './movie_data_reducer';

const rootReducer = combineReducers({
  movieData: MovieDataReducer,
});

export default rootReducer;
