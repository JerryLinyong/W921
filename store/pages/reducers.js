import * as actions from './actionTypes';
import {handleActions} from 'redux-actions';
import {Map, updateIn, update, remove, List, fromJS} from 'immutable';

let initPages = fromJS({});
let defaultPage = {};

export default handleActions(
  {
    // 加载所有页面
    [actions.LOAD_PAGES_SUCCESS]: (state, action) => fromJS(action.payload),
    // 增加页面
    [actions.ADD_PAGE_SUCCESS]: (state, action) => {
      let newPage = action.payload;
      state.set(newPage.id, fromJS(newPage));
      return state;
    },
    // 更新页面
    [actions.UPDATE_PAGE_SUCCESS]: (state, action) => {
      let newProps = action.payload;
      let page = state.get(newProps.id);
      for (let key in newProps) {
        if (typeof newProps[key] === 'object') {
          page.set(key, fromJS(newProps[key]));
        } else {
          page.set(key, newProps[key]);
        }
      }
      return state;
    },
    // 移除页面 payload=id
    [actions.REMOVE_PAGE_SUCCESS]: (state, action) => {
      state.delete(action.payload);
      return state;
    },
  },
  initPages,
);
