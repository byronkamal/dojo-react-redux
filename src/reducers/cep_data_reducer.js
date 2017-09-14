import { FETCH_CEP_DATA } from '../actions/index';

export default function(state = { }, action) {
  switch (action.type) {
    case FETCH_CEP_DATA:
      return action.payload.data;
    default:
      return state;
  }
}
