import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/medium.css';

//import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';

import App from './App.js';
import registerServiceWorker from './registerServiceWorker';

import configureStore, { history } from './redux/store';

import { getUser } from './redux/actions/actions';

const store = configureStore()

if (localStorage.Auth) {
  console.log('first dispatch')
  store.dispatch({type: 'SET_USER', user: JSON.parse(localStorage.Auth)})

  var _id = JSON.parse(localStorage.Auth)._id
  getUser(_id).then((res) => {
    store.dispatch({type: 'SET_USER', user: res})
  })
}

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
