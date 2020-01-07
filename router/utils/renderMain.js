// 对主页面进行redux的封装
import {connect} from 'react-redux';
import getStoreProps from './getStoreProps';
import React from 'react';
export default function renderMain(Dom, params = {}) {
  // 根据传进来的路由参数,修改对应的主页面显示
  class DomWithParams extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Dom {...Object.assign(params, this.props)} />;
    }
  }
  // 获取自定义的仓库值和动作
  const {mapStateToProps, mapDispatchToProps} = getStoreProps(Dom);
  return connect(mapStateToProps, mapDispatchToProps)(DomWithParams);
}
