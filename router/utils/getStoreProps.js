// 通过定义commonStates和commonDispatchs,可以定义一些主页面共有的仓库props值,如theme
//
// static(dom 通过static 获取的仓库的props 和 actions,只支持主页面父元素,子元素不支持)
//   mapStateToProps:()=>{} // 连接仓库的store,传递prop值,和connect用法一样
//   mapDispatchToProps:()=>{} // 连接仓库的store,传递action,和connect用法一样
export default function getStoreProps(Dom) {
  // 通用的states
  let commonStates = (state, ownProps) => ({
    // 默认将主题注入所有的主页面,主题和语言变换默认会修改重新渲染所有页面,把用到theme和language的参数设置在constructor里面可以减少渲染
    theme: state.theme,
  });
  // 通用的dispatch
  let commonDispatchs = (dispatch, ownProps) => ({});
  // 连接仓库
  const mapStateToProps = (state, ownProps) => {
    let storeStates = commonStates(state, ownProps);
    if (typeof Dom.mapStateToProps === 'function') {
      // 页面的props值
      let domStoreProps = Dom.mapStateToProps(state, ownProps);
      storeStates = Object.assign(storeStates, domStoreProps);
    }
    return storeStates;
  };
  const mapDispatchToProps = (dispatch, ownProps) => {
    let storeDispatchs = commonDispatchs(dispatch, ownProps);
    if (typeof Dom.mapDispatchToProps === 'function') {
      // 页面的actions值
      let domStoreActions = Dom.mapDispatchToProps(dispatch, ownProps);
      storeDispatchs = Object.assign(storeDispatchs, domStoreActions);
    }
    return storeDispatchs;
  };
  return {mapStateToProps, mapDispatchToProps}; // 返回dom自定义的props,actions
}
