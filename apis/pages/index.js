// 加载页面信息
export function loadPages() {
  return _http({
    url: '/my/profile',
    method: 'get',
  });
}
export const v_loadPages = _ajv.compile({
  type: 'object',
  properties: {mainmenu: {type: 'array'}},
});
