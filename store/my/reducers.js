import * as actions from './actionTypes';
import {handleActions} from 'redux-actions';
import {Map, updateIn, update, remove, List, fromJS} from 'immutable';

let initMy = fromJS({
  mac: 'gag',
});

export default handleActions(
  {
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
  },
  initMy,
);
