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
    // ================== 成功 ========================================== //
    // 加载所有分区
    [actions.LOAD_AREAS_SUCCESS]: (state, action) => fromJS(action.payload),
    // 增加分区
    [actions.ADD_AREA_SUCCESS]: (state, action) => {
      let newArea = action.payload;
      return state.set(newArea.id, fromJS(newArea));
    },
    // 更新分区
    [actions.UPDATE_AREA_SUCCESS]: (state, action) => {
      let newProps = action.payload;
      return state.update(area => {
        if (area.get(id) === newProps.id) {
          return fromJS(Object.assign(area.toJS(), newProps));
        }
      });
    },
    // 移除分区 payload=id
    [actions.REMOVE_AREA_SUCCESS]: (state, action) => {
      return state.delete(action.payload);
    },
    // ================== 失败 ========================================== //
    // 加载所有分区
    [actions.LOAD_AREAS_FAIL]: (state, action) => {
      return state;
    },
    // 增加分区
    [actions.ADD_AREA_FAIL]: (state, action) => {
      return state;
    },
    // 更新分区
    [actions.UPDATE_AREA_FAIL]: (state, action) => {
      return state;
    },
    // 移除分区 payload=id
    [actions.REMOVE_AREA_FAIL]: (state, action) => {
      return state;
    },
  },
  initAreas,
);
