// 通用的路由头部组件
// static
//   mapStateToProps:()=>{} // 连接仓库的store,传递prop值,和connect用法一样
//   mapDispatchToProps:()=>{} // 连接仓库的store,传递action,和connect用法一样
// props
//   title: '未定义', // 路由title
//   backable: true, // 是否在左侧显示返回按钮,默认 = true,点击会返回上一页
//   checkable: true, // 是否在右侧显示打勾按钮,默认 = true,点击会触发页面onHeaderClick,传递字符串check
//   buttons: [], // 定义右侧按钮 {icon,name}
// methods
// events
//   onHeaderClick // 当路由头部右侧图标按钮被点击,触发页面的onHeaderClick方法,并且传递点击图标的id
import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import getStoreProps from './getStoreProps';
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: scaleSizeH(40),
    height: scaleSizeH(140),
  },
  icon: {
    padding: scaleSizeH(30),
    fontSize: setSpText(60),
    color: 'white',
  },
});
// 渲染头部组件

function renderHeader(Dom) {
  const headerOptions = Object.assign(
    {
      title: '未定义',
      backable: true, // 是否在左侧显示返回按钮,默认 = true
      checkable: true, // 是否在右侧显示打勾按钮,默认 = true
      buttons: [], // 定义右侧按钮 {icon,name}
    },
    Dom.navigationOptions,
  );
  // 获取自定义的仓库值和动作
  const {mapStateToProps, mapDispatchToProps} = getStoreProps(Dom);
  class DomWithHeader extends React.Component {
    constructor(props) {
      super(props);
      this.mainDomRef = React.createRef();
    }
    goBack() {
      this.props.navigation.goBack();
    }
    // 点击头部图标,触发实例的onHeaderClick方法,传递突变名称
    onHeaderClick(type) {
      if (
        this.mainDomRef.current &&
        typeof this.mainDomRef.current.onHeaderClick === 'function'
      ) {
        this.mainDomRef.current.onHeaderClick(type);
      }
    }
    render() {
      const primaryColor = themeProvider.get(this.props.theme).primary;
      return (
        <View style={{height: '100%'}}>
          <View style={[styles.header, {backgroundColor: primaryColor}]}>
            <StatusBar backgroundColor={primaryColor} />
            {headerOptions.backable ? (
              <Icon
                name="arrow-left"
                style={styles.icon}
                onPress={this.goBack.bind(this)}
              />
            ) : null}
            <Text>{headerOptions.title}</Text>
            <View>
              {headerOptions.buttons.map(button => (
                <Icon
                  name={button.icon}
                  style={styles.icon}
                  onPress={this.onHeaderClick.bind(this, button.name)}
                />
              ))}
              {headerOptions.checkable ? (
                <Icon
                  name="check"
                  style={styles.icon}
                  onPress={this.onHeaderClick.bind(this, 'check')}
                />
              ) : null}
            </View>
          </View>
          <Dom ref={this.mainDomRef} {...this.props}></Dom>
        </View>
      );
    }
  }
  return connect(mapStateToProps, mapDispatchToProps)(DomWithHeader);
}

export default function renderHeaders(doms) {
  for (let page in doms) {
    doms[page] = renderHeader(doms[page]);
  }
  return doms;
}
