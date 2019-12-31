import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import initScreen from './init';
import MainScreen from './main';
import entry from './entry';

export default class AppNavigator extends React.Component {
  render() {
    const AppNavigator = createAppContainer(
      createStackNavigator(
        {
          Init: initScreen,
          Main: MainScreen,
          ...entry,
        },
        {
          initialRouteName: 'Init', // 起始页
          defaultNavigationOptions: {}, // 默认所有页面的导航样式
        },
      ),
    );
    return <AppNavigator />;
  }
}
