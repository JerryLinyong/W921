import http from '@utils/http';
import mockHttp from '@utils/mockHttp';
export function loadPages() {
  if (isDev) {
    const mockData = {
      status: 'success',
      payload: {
        pages: [
          {view: 'Home'},
          {view: 'Message'},
          {view: 'Statistics'},
          {view: 'gagaga'}, // 当页面不存在,会显示错误页面
          {view: 'Settings'},
        ],
      },
    };
    return mockHttp(mockData, 1000);
  } else {
    return http({
      url: '/pages/load',
      method: 'get',
    });
  }
}
