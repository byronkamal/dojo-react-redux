import { combineReducers } from 'redux';
import ArtistDataReducer from './artist_data_reducer';

const rootReducer = combineReducers({
  artistData: ArtistDataReducer,
});

export default rootReducer;
