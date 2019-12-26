import http from '@utils/http';
import mockHttp from '@utils/mockHttp';
export function loadAreas() {
  if (isDev) {
    const mockData = {status: 'success', payload: {}};
    return mockHttp(mockData, 1000);
  } else {
    return http({
      url: '/areas/load',
      method: 'get',
    });
  }
}
