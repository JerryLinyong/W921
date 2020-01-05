import './bootstrap';
import React from 'react';
import Router from './router';
import {Provider} from 'react-redux';
import store from './store';
import 'react-native-gesture-handler';
import {Provider as AntProvider} from '@ant-design/react-native';

export default class App extends React.Component {
  render() {
    return (
      <AntProvider>
        <Provider store={store}>
          <Router />
        </Provider>
      </AntProvider>
    );
  }
}
