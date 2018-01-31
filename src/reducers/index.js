import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";
import VideosReducer from "./reducer_youtube";
///import UserReducer from "./reducer_users";

const rootReducer = combineReducers({
  videoData: VideosReducer,
  form: formReducer,
});

export default rootReducer;
