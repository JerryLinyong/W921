export function loadAreas() {
  return _http({
    url: '/areas/load',
    method: 'get',
  });
}
export const v_loadAreas = _ajv.compile({
  type: 'object',
  properties: {mainmenu: {type: 'array'}},
});
