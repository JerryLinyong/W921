import './bootstrap';
import React from 'react';
import Router from './router';
import {Provider} from 'react-redux';
import store from './store';
import 'react-native-gesture-handler';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
