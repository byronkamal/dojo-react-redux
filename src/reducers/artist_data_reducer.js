import { FETCH_ARTIST_DATA } from '../actions/index';

export default function(state = { }, action) {
  switch (action.type) {
    case FETCH_ARTIST_DATA:
      return action.payload.data;
    default:
      return state;
  }
}
