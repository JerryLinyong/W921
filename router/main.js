// app主页面,根据不同的用户生成
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Home from '../modules/home';
import Map from '../modules/map';
import Message from '../modules/message';
import Settings from '../modules/settings';
import Statistics from '../modules/statistics';
import {connect} from 'react-redux';

class MainTabNavigator extends React.Component {
  render() {
    // ====== 样式 ====== //
    // 选项卡是否可见
    // const tabBarStyle = {display: 'none'};
    const tabBarStyle = {};
    // ====== 加载的页面 ====== //
    // 根据不同的app加载不同的页面
    if (this.props.app === 'hispro') {
    } else if (this.props.app === '') {
    }
    // 创建tabs
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
            showIcon: true, // 是否展现icon
            showLabel: false, // 是否展现label
            // 导航栏样式
            activeTintColor: 'blue', // 激活的标签和图标颜色
            activeBackgroundColor: 'white', // 激活的背景色
            labelStyle: {}, // 选项卡标签的样式对象
            iconStyle: {}, // 选项卡图标的样式对象
            style: tabBarStyle, // 整体的样式,包含页面
          },
        },
      ),
    );
    return <MainTabNavigator />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pages: state.pages.get('pages'), // 加载的页面
    theme: state.my.get('theme'), // 主题
    app: state.my.get('app'), // app的类型
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainTabNavigator);
