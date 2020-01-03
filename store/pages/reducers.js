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
    [actions.LOAD_PAGES_SUCCESS]: (state, action) =>
      fromJS(
        Object.assign(action.payload, {
          loaded: {load: true},
          errors: {},
        }),
      ),
    // 增加页面
    [actions.ADD_PAGE_SUCCESS]: (state, action) => {
      return state.set(newPage.id, fromJS(action.payload));
    },
    // 更新页面
    [actions.UPDATE_PAGE_SUCCESS]: (state, action) => {
      let newProps = action.payload;
      return state.update(page => {
        if (page.get(id) === newProps.id) {
          return fromJS(Object.assign(page.toJS(), newProps));
        }
      });
    },
    // 移除页面 payload=id
    [actions.REMOVE_PAGE_SUCCESS]: (state, action) => {
      return delete action.payload;
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
