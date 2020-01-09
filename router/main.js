// app主页面,根据不同的用户生成
import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {connect} from 'react-redux';
import getPages from './utils/getPages';
import TabBar from './components/tabBar';

function MainTabNavigator(props) {
  // ====== 加载的页面 ====== //
  // 根据不同的app加载不同的页面
  const [MainPages, setMainPages] = useState(<View />);
  useEffect(() => {
    let pages = getPages(props.app, props.pages);
    // 创建tabs
    const MainTabNavigator = createAppContainer(
      // createMaterialTopTabNavigator提供更多的功能
      createMaterialTopTabNavigator(pages, {
        tabBarPosition: 'bottom', // 导航栏位置
        initialRouteName: 'Home', // 默认首页
        backBehavior: 'initialRoute', // 返回的行为
        lazy: true, // 是否懒加载
        swipeEnabled: true, // 是否允许滑动切换tab页
        animationEnabled: true, // 是否在切换tab页时使用动画
        tabBarComponent: TabBar,
      }),
    );
    setMainPages(<MainTabNavigator />);
  }, [props.app, props.pages]);
  return MainPages;
}

const mapStateToProps = (state, ownProps) => {
  return {
    pages: state.pages.get('pages').toJS(), // 加载的页面
    app: state.my.get('app'), // app的类型
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainTabNavigator);
