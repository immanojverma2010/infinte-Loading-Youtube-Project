import _ from "lodash";
import { FETCH_USERS, FETCH_USER, DELETE_USER } from "../actions/actions_user";


export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_USER:
      return _.omit(state, action.payload);
    case FETCH_USER:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_USERS:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}
