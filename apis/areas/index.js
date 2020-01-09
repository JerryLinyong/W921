import http from '@utils/http';
export function loadAreas() {
  return http({
    url: '/areas/load',
    method: 'get',
  });
}
