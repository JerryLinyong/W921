// app主页面,根据不同的用户生成
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {connect} from 'react-redux';
import getPages from './utils/getPages';

class MainTabNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const primaryColor = themeProvider.get(this.props.theme).primary;
    // ====== 样式 ====== //
    // 选项卡是否可见
    let tabBarStyle = {display: 'none'};
    if (this.props.showTabBar) {
      delete tabBarStyle.display;
    }
    // ====== 加载的页面 ====== //
    // 根据不同的app加载不同的页面
    let pages = getPages(this.props.app, this.props.pages);
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
        style: {}, // 整体的样式,包含页面
        tabBarOptions: {
          showIcon: true, // 是否展现icon
          showLabel: false, // 是否展现label
          // 导航栏样式
          activeTintColor: primaryColor, // 激活的标签和图标颜色
          labelStyle: {}, // 选项卡标签的样式对象
          iconStyle: {}, // 选项卡图标的样式对象
          indicatorStyle: {
            backgroundColor: primaryColor,
          },
          style: Object.assign({}, tabBarStyle), // 整体的样式,包含页面
        },
      }),
    );
    return <MainTabNavigator />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pages: state.pages.get('pages').toJS(), // 加载的页面
    showTabBar: state.pages.get('showTabBar'), // 是否显示tabBar
    theme: state.my.get('theme'), // 主题
    app: state.my.get('app'), // app的类型
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainTabNavigator);
