import * as actions from './actionTypes';
import {handleActions} from 'redux-actions';
import {Map, updateIn, update, remove, List, fromJS} from 'immutable';

let initMy = fromJS({
  mac: 'affhfaa1234', // 本机的mac地址
  app: 'hispro', // 本机的app类型,根据类型呈现不同的页面
});

export default handleActions(
  {
    // ================== 成功 ========================================== //
    // 更新我的信息
    [actions.UPDATE_MY_SUCCESS]: (state, action) => {
      let newProps = action.payload;
      for (let key in newProps) {
        if (typeof newProps[key] === 'object') {
          state.set(key, fromJS(newProps[key]));
        } else {
          state.set(key, newProps[key]);
        }
      }
      return state;
    },
    // ================== 失败 ========================================== //
    [actions.UPDATE_MY_FAIL]: (state, action) => {
      return state;
    },
  },
  initMy,
);
