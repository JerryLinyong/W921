// 把store里面的路由转换成tabNav可以解析的数据
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// w921 页面
import W921HomePage from '@w921/home';
import W921MapPage from '@w921/map';
import W921MessagePage from '@w921/message';
import W921StatisticsPage from '@w921/statistics';
import W921SettingsPage from '@w921/settings';
// voerka消息页面
import VoerkaMsgHomePage from '@voerkaMsg/home';
import VoerkaMsgMapPage from '@voerkaMsg/map';
import VoerkaMsgMessagePage from '@voerkaMsg/message';
import VoerkaMsgStatisticsPage from '@voerkaMsg/statistics';
import VoerkaMsgSettingsPage from '@voerkaMsg/settings';
// 通用页面
import ErrorPage from '@pages/error';
// ================== 通用 ========================= //
const commonPages = {
  Error: {screen: ErrorPage, label: '错误', icon: 'close'}, // 错误页面
};

// 页面可以自定义的只有页面顺序和图标和名称
// ================== W921 ========================= //
const w921Pages = {
  Home: {
    screen: W921HomePage,
    label: '主页',
    icon: 'home',
  },
  Message: {
    screen: W921MessagePage,
    label: '消息',
    icon: 'email',
  },
  Statistics: {
    screen: W921StatisticsPage,
    label: '统计',
    icon: 'chart-pie',
  },
  Map: {
    screen: W921MapPage,
    label: '地图',
    icon: 'map',
  },
  Settings: {
    screen: W921SettingsPage,
    label: '设置',
    icon: 'settings-outline',
  },
};

// ================== voerka消息页面 ========================= //
const voerkaMsgPages = {
  Home: {
    screen: VoerkaMsgHomePage,
    label: '主页',
    icon: 'home',
  },
  Message: {
    screen: VoerkaMsgMessagePage,
    label: '消息',
    icon: 'email',
  },
  Statistics: {
    screen: VoerkaMsgStatisticsPage,
    label: '统计',
    icon: 'chart-pie',
  },
  Map: {
    screen: VoerkaMsgMapPage,
    label: '地图',
    icon: 'map',
  },
  Settings: {
    screen: VoerkaMsgSettingsPage,
    label: '设置',
    icon: 'settings-outline',
  },
};

// 所有的主页面
const allMainPages = {
  w921: w921Pages,
  voerkaMsg: voerkaMsgPages,
};
// params{Array}
export default function getPages(app, pages) {
  let navPages = {};
  let mainPages = allMainPages[app]
  pages.forEach(page => {
    let defaultPage = mainPages[page.view] || commonPages.Error;
    navPages[page.view] = {
      screen: defaultPage.screen,
      navigationOptions: {
        tabBarLabel: page.label || defaultPage.label,
        tabBarIcon: ({tintColor}) => (
          <Icon
            name={page.icon || defaultPage.icon}
            color={tintColor}
            size={24}
          />
        ),
      },
    };
  });
  return navPages;
}
