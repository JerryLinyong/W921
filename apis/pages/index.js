import http from '@utils/http';
import mockHttp from '@utils/mockHttp';
export function loadPages() {
  if (isDev) {
    const mockData = {status: 'success', payload: {page: 'gag'}};
    return mockHttp(mockData, 6000);
  } else {
    return http({
      url: '/pages/load',
      method: 'get',
    });
  }
}
