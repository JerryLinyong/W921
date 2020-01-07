import * as actions from './actionTypes';
import {handleActions} from 'redux-actions';
import {Map, updateIn, update, remove, List, fromJS} from 'immutable';

let initMy = fromJS({
  app: '', // 本机的app类型,根据类型呈现不同的页面,为空则要进行选择
  theme: 'default', // 主题
  language: 'zh-CN',
});

export default handleActions(
  {
    // ================== 成功 ========================================== //
    // 更新我的信息
    [actions.UPDATE_MY_SUCCESS]: (state, action) => {
      let newProps = action.payload;
      let newState = state;
      for (let key in newProps) {
        if (typeof newProps[key] === 'object') {
          newState = state.set(key, fromJS(newProps[key]));
        } else {
          newState = state.set(key, newProps[key]);
        }
      }
      return newState;
    },
    // ================== 失败 ========================================== //
    [actions.UPDATE_MY_FAIL]: (state, action) => {
      return state;
    },
  },
  initMy,
);
