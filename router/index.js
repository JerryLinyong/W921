// 定义app所有的路由
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import initScreen from './init';
import MainScreen from './main';
import entry from './entry'; // 支持header自定义,与仓库的数据连接定义在static
import renderHeaders from './utils/renderHeaders';

// 创建路由
const AppNavigatorDom = createAppContainer(
  createStackNavigator(
    {
      Init: initScreen,
      Main: MainScreen,
      ...renderHeaders(entry),
    },
    {
      headerMode: 'none', // 不显示头部
      initialRouteName: 'Init', // 起始页
      defaultNavigationOptions: {}, // 默认所有页面的导航样式
    },
  ),
);

export default class AppNavigator extends React.Component {
  render() {
    return <AppNavigatorDom />;
  }
}
