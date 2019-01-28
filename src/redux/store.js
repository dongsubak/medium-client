import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router'
//import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from './reducer';
import thunk from 'redux-thunk';

import { createBrowserHistory } from 'history'

export const history = createBrowserHistory();
// Build the middleware for intercepting and dispatching navigation actions
//const myRouterMiddleware = routerMiddleware(history);
export default function configureStore(preloadedState) {
  const store = createStore(
    reducer(history), // root reducer with router state
    preloadedState,
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
  )
  return store
}
//export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
