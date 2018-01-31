import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
import thunk  from "redux-thunk";

import UsersIndex from "./components/Users/users_index";
import UsersShow from "./components/Users/users_show";
import VideosIndex from "./components/Videos/videos_index";

import Main from "./components/main";


  
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>

          <Route path="/users/:id" component={UsersShow} />
          <Route path="/users" component={UsersIndex} />


          <Route path="/videos" component={VideosIndex} />

          <Route path="/" component={Main} />

        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
