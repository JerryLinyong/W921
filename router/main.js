import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from '../modules/home';
import Map from '../modules/map';
import Message from '../modules/message';
import Settings from '../modules/settings';
import Statistics from '../modules/statistics';
import theme from '../bootstrap/theme';

export default class MainTabNavigator extends React.Component {
  render() {
    const MainTabNavigator = createAppContainer(
      createBottomTabNavigator(
        {
          Home: {
            screen: Home,
            navigationOptions: {
              tabBarLabel: '主页',
              tabBarIcon: ({tintColor}) => (
                <Icon name="account-check" color={tintColor} size={24} />
              ),
            },
          },
          Map: {
            screen: Map,
            navigationOptions: {
              tabBarLabel: '主页',
              tabBarIcon: ({tintColor}) => (
                <Icon name="account-check" color={tintColor} size={24} />
              ),
            },
          },
          Message: {
            screen: Message,
            navigationOptions: {
              tabBarLabel: '主页',
              tabBarIcon: ({tintColor}) => (
                <Icon name="account-check" color={tintColor} size={24} />
              ),
            },
          },
          Settings: {
            screen: Settings,
            navigationOptions: {
              tabBarLabel: '主页',
              tabBarIcon: ({tintColor}) => (
                <Icon name="account-check" color={tintColor} size={24} />
              ),
            },
          },
          Statistics: {
            screen: Statistics,
            navigationOptions: {
              tabBarLabel: '主页',
              tabBarIcon: ({tintColor}) => (
                <Icon name="account-check" color={tintColor} size={24} />
              ),
            },
          },
        },
        {},
      ),
    );
    return <MainTabNavigator />;
  }
}
