// dom 通过static 获取的仓库的props 和 actions
// static
//   mapStateToProps:()=>{} // 连接仓库的store,传递prop值,和connect用法一样
//   mapDispatchToProps:()=>{} // 连接仓库的store,传递action,和connect用法一样
export default function getStoreProps(Dom, extralStates = () => {}) {
  // 连接仓库
  const mapStateToProps = (state, ownProps) => {
    let storeProps = extralStates(state, ownProps);
    if (typeof Dom.mapStateToProps === 'function') {
      let domStoreProps = Dom.mapStateToProps(state, ownProps);
      // 页面的props值
      storeProps = Object.assign(storeProps, domStoreProps);
    }
    return storeProps;
  };
  const mapDispatchToProps = (dispatch, ownProps) => {
    if (typeof Dom.mapDispatchToProps === 'function') {
      let domStoreActions = Dom.mapDispatchToProps(dispatch, ownProps);
      // 页面的actions值
      return domStoreActions;
    } else {
      return {};
    }
  };
  return {mapStateToProps, mapDispatchToProps}; // 返回dom自定义的props,actions
}
