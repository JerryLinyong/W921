import http from '@utils/http';
export function loadPages() {
  return http({
    url: '/my/profile',
    method: 'get',
  });
}
