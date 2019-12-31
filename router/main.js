import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Home from '../modules/home';
import Map from '../modules/map';
import Message from '../modules/message';
import Settings from '../modules/settings';
import Statistics from '../modules/statistics';
import theme from '../bootstrap/theme';

export default class MainTabNavigator extends React.Component {
  render() {
    // 选项卡是否可见
    const tabBarStyle = {display: 'none'};
    const MainTabNavigator = createAppContainer(
      // createMaterialTopTabNavigator提供更多的功能
      createMaterialTopTabNavigator(
        {
          Home: {
            screen: Home,
            navigationOptions: {
              tabBarLabel: '主页',
              tabBarIcon: ({tintColor}) => (
                <Icon name="home" color={tintColor} size={24} />
              ),
            },
          },
          Message: {
            screen: Message,
            navigationOptions: {
              tabBarLabel: '消息',
              tabBarIcon: ({tintColor}) => (
                <Icon name="email" color={tintColor} size={24} />
              ),
            },
          },
          Statistics: {
            screen: Statistics,
            navigationOptions: {
              tabBarLabel: '统计',
              tabBarIcon: ({tintColor}) => (
                <Icon name="chart-pie" color={tintColor} size={24} />
              ),
            },
          },
          Map: {
            screen: Map,
            navigationOptions: {
              tabBarLabel: '地图',
              tabBarIcon: ({tintColor}) => (
                <Icon name="map" color={tintColor} size={24} />
              ),
            },
          },
          Settings: {
            screen: Settings,
            navigationOptions: {
              tabBarLabel: '设置',
              tabBarIcon: ({tintColor}) => (
                <Icon name="settings-outline" color={tintColor} size={24} />
              ),
            },
          },
        },
        {
          tabBarPosition: 'bottom', // 导航栏位置
          initialRouteName: 'Home', // 默认首页
          backBehavior: 'initialRoute', // 返回的行为
          lazy: true, // 是否懒加载
          swipeEnabled: true, // 是否允许滑动切换tab页
          animationEnabled: true, // 是否在切换tab页时使用动画
          style: {}, // 整体的样式,包含页面
          tabBarOptions: {
            // 导航栏样式
            activeTintColor: 'blue', // 激活的标签和图标颜色
            activeBackgroundColor: 'white', // 激活的背景色
            style: tabBarStyle, // 整体的样式,包含页面
          },
        },
      ),
    );
    return <MainTabNavigator />;
  }
}
