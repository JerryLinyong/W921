import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from './main';

export default class AppNavigator extends React.Component {
  render() {
    const AppNavigator = createAppContainer(
      createStackNavigator(
        {
          Main: MainScreen,
        },
        {
          initialRouteName: 'Main', // 起始页
          defaultNavigationOptions: {}, // 默认所有页面的导航样式
        },
      ),
    );
    return <AppNavigator />;
  }
}
