// 把store里面的路由转换成tabNav可以解析的数据
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import renderMain from './renderMain';
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
  Error: ErrorPage, // 错误页面
};

// 页面可以自定义的只有页面顺序和图标和名称
// ================== W921 ========================= //
const w921Pages = {
  Home: W921HomePage,
  Message: W921MessagePage,
  Statistics: W921StatisticsPage,
  Map: W921MapPage,
  Settings: W921SettingsPage,
};

// ================== voerka消息页面 ========================= //
const voerkaMsgPages = {
  Home: VoerkaMsgHomePage,
  Message: VoerkaMsgMessagePage,
  Statistics: VoerkaMsgStatisticsPage,
  Map: VoerkaMsgMapPage,
  Settings: VoerkaMsgSettingsPage,
};

// 所有的主页面
const allMainPages = {
  w921: w921Pages,
  voerkaMsg: voerkaMsgPages,
};
// params{Array}
export default function getPages(app, pages) {
  let navPages = {};
  let mainPages = allMainPages[app];
  pages.forEach(page => {
    let defaultPage = mainPages[page.name] || commonPages.Error;
    navPages[page.name] = {
      screen: renderMain(defaultPage, page.params),
    };
  });
  return navPages;
}
