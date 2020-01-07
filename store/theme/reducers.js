// 更换主题,支持本地定义的几种主题
import * as actions from './actionTypes';
import {handleActions} from 'redux-actions';
import {Map, updateIn, update, remove, List, fromJS} from 'immutable';
import defaultTheme from '@assets/themes/default';
import redTheme from '@assets/themes/red';
// 所有的主题
let themes = {default: defaultTheme, red: redTheme};
//
let initPages = fromJS(defaultTheme);

export default handleActions(
  {
    // ================== 成功 ========================================== //
    // 更改主题,暂时只支持修改已有的
    [actions.CHANGE_THEME_SUCCESS]: (state, action) => {
      let theme = themes[action.payload.name] || themes.default;
      return fromJS(theme);
    },

    // ================== 失败 ========================================== //
  },
  initPages,
);
