// 对主页面进行redux的封装
import {connect} from 'react-redux';
import getStoreProps from './getStoreProps';
export default function renderMain(Dom) {
  // 获取自定义的仓库值和动作
  const {mapStateToProps, mapDispatchToProps} = getStoreProps(Dom);
  return connect(mapStateToProps, mapDispatchToProps)(Dom);
}
