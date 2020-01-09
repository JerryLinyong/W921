import http from '@utils/http';
import mockHttp from '@utils/mockHttp';
export function loadPages() {
  if (isDev) {
    const mockData = {
      status: 'success',
      payload: {
        pages: [
          {name: 'Home', icon: 'home', label: '主页'},
          {name: 'Message', icon: 'email', label: '消息'},
          {name: 'Statistics'},
          {name: 'gagaga'}, // 当页面不存在,会显示错误页面
          {name: 'Settings'},
        ],
      },
    };
    return mockHttp(mockData, 2000);
  } else {
    return http({
      url: '/pages/load',
      method: 'get',
    });
  }
}
