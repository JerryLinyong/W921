import * as actions from './actionTypes';
import {handleActions} from 'redux-actions';
import {Map, updateIn, update, remove, List, fromJS} from 'immutable';

// 要加状态字段,判断是否加载成功
let initPages = fromJS({
  // 用于管理动作的状态
  loaded: {}, // 是否加载动作加载成功
  errors: {load: null}, // 是否加载动作存在错误
  pages: [],
});
let defaultPage = {};

export default handleActions(
  {
    // ================== 成功 ========================================== //
    // 加载所有页面
    [actions.LOAD_PAGES_SUCCESS]: (state, action) => {
      state = fromJS(
        Object.assign(action.payload, {
          loaded: {load: true},
          errors: {},
        }),
      );
      return state;
    },
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
    // ================== 失败 ========================================== //
    // 加载所有页面失败
    [actions.LOAD_PAGES_FAIL]: (state, action) => {
      return state;
    },
    // 增加页面失败
    [actions.ADD_PAGE_FAIL]: (state, action) => {
      return state;
    },
    // 更新页面失败
    [actions.UPDATE_PAGE_FAIL]: (state, action) => {
      return state;
    },
    // 移除页面失败
    [actions.REMOVE_PAGE_FAIL]: (state, action) => {
      return state;
    },
  },
  initPages,
);
