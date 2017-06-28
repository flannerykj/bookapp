/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Provider} from 'react-redux'; 
import { createStore, combineReducers, applyMiddleware, compose, } from 'redux'
import thunkMiddleware from 'redux-thunk'; 
import { logger } from 'redux-logger';
import reducer from './src/reducers';
import {
  AppRegistry,
} from 'react-native'; 
import TabBarNavigation from './src/containers/tabBar/views/TabBarNavigation.js'
import store from './src/store'

const App = () => (
  <Provider store={store}> 
    <TabBarNavigation />
  </Provider> 
  )

AppRegistry.registerComponent('bookapp', () => App);
