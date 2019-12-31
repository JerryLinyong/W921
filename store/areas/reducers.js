import * as actions from './actionTypes';
import {handleActions} from 'redux-actions';
import {Map, updateIn, update, remove, List, fromJS} from 'immutable';

let initAreas = fromJS({
  id: {
    id: '', // 区域唯一编码 string
    type: 'area', // 资源类型
    title: '', // 名称 string
    memo: '', // 区域备注 string
    order: 0, // 排列序号 number
    express: ['receiverId'], //  转发到目标 array
  },
});
let defaultArea = {
  id: '', // 区域唯一编码 string
  type: 'area', // 资源类型
  title: '', // 名称 string
  memo: '', // 区域备注 string
  order: 0, // 排列序号 number
  express: [], //  转发到目标 array
};

export default handleActions(
  {
    // 加载所有分区
    [actions.LOAD_AREAS_SUCCESS]: (state, action) => fromJS(action.payload),
    // 增加分区
    [actions.ADD_AREA_SUCCESS]: (state, action) => {
      let newArea = action.payload;
      state.set(newArea.id, fromJS(newArea));
      return state;
    },
    // 更新分区
    [actions.UPDATE_AREA_SUCCESS]: (state, action) => {
      let newProps = action.payload;
      let area = state.get(newProps.id);
      for (let key in newProps) {
        if (typeof newProps[key] === 'object') {
          area.set(key, fromJS(newProps[key]));
        } else {
          area.set(key, newProps[key]);
        }
      }
      return state;
    },
    // 移除分区 payload=id
    [actions.REMOVE_AREA_SUCCESS]: (state, action) => {
      state.delete(action.payload);
      return state;
    },
  },
  initAreas,
);
