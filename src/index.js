import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
import PostsIndex from "./components/Posts/posts_index";
import PostsShow from "./components/Posts/posts_show";
import PostsNew from "./components/Posts/posts_new";
import UsersIndex from "./components/Users/users_index";
import UsersShow from "./components/Users/users_show";

import Main from "./components/main";



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/users/:id" component={UsersShow} />
          <Route path="/users" component={UsersIndex} />
          <Route path="/posts" component={PostsIndex} />
          <Route path="/" component={Main} />

        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
