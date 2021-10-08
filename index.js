/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {fcmToken} from './Redux/reducers';
const main = () => {
  const reducers = combineReducers({
    fcmToken: fcmToken,
  });
  const store = createStore(reducers);
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => main);
