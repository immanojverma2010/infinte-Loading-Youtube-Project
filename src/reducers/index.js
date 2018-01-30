import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";
import PostsReducer from "./reducer_posts";
import UserReducer from "./reducer_users";

const rootReducer = combineReducers({
  posts: PostsReducer,
  users: UserReducer,
  form: formReducer,
});

export default rootReducer;
