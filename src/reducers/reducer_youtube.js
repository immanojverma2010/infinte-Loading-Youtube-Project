import _ from "lodash";
import { FETCH_VIDEOS } from "../actions/actions_youtube";


export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_VIDEOS:
          
      return action.payload;
    default:
      return state;
  }
}
