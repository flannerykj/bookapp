'use strict'

// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'
import {logger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
// Navigation
import { NavigatorHomeTab } from './containers/homeTab/navigationConfiguration'
import { NavigatorMyBooksTab } from './containers/myBooksTab/navigationConfiguration'
import { TabBar, tabBarReducer } from './containers/tabBar/navigationConfiguration'
import bookApp from './reducers'


// Middleware
const middleware = () => {
  return applyMiddleware(logger, thunkMiddleware)
}

export default createStore(
  combineReducers({
    tabBar: tabBarReducer,

    homeTab: (state,action) => NavigatorHomeTab.router.getStateForAction(action,state),

    myBooksTab: (state,action) => NavigatorMyBooksTab.router.getStateForAction(action,state),

    bookApp: bookApp
  }),
  middleware(),
)