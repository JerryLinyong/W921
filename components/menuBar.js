/**
 * 显示页面头部信息
 *  props
 *    theme: PropTypes.string, // 主题
 *    title: PropTypes.string, // 左侧的主要标题
 *    subTitle: PropTypes.string, // 左侧的次要标题
 *    centerComponents: PropTypes.array, // 中间的自定义组件
 *    rightComponents: PropTypes.array, // 右侧的自定义组件
 *                                   [{
 *                                      type: "", // header里面定义的一些通用的组件,如timer时间显示器,或则customised自定义
 *                                      params: {}, // 参数
 *                                      onPress: function, // 点击的事件
 *                                      component: 组件, // 组件
 *                                      style: {} //样式
 *                                    }]
 *  methods
 *  events
 *
 *  实例
 *    import MenuBar from '@components/menuBar';
 *    // 防止重复渲染,把参数设置再state里面,然后通过方法set*才可以修改state的值
 *    constructor(props) {
 *      this.state={
 *        menuStyle: this.setMenuStyle(),
 *        menuCenterComponents: this.setMenuCenterComponents(),
 *        menuRightComponents: this.setMenuRightComponents(),
 *      }
 *    }
 *    setMenuStyle(){
 *      return {backgroundColor:'red'}
 *    }
 *    setMenuCenterComponents(){
 *      return [{type: 'timer'}]
 *    }
 *    setMenuRightComponents(){
 *      return []
 *    }
 *    <MenuBar
 *      style={this.state.menuStyle}
 *      centerComponents={this.state.menuCenterComponents}
 *      centerComponents={this.state.menuCenterComponents}
 *      rightComponents={this.state.menuRightComponents}
 *    />
 */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Clock from './clock';
import Title from './title';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: scaleSizeH(130),
    padding: scaleSizeH(40),
  },
  left: {
    flexDirection: 'row',
  },
  center: {
    flexDirection: 'row',
  },
  right: {
    flexDirection: 'row',
  },
});
// 默认的一些组件
const defaultComponents = {
  view: {component: View},
  clock: {
    component: Clock,
    style: {fontSize: setSpText(40)},
  },
  title: {component: Title},
  text: {component: Text},
  icon: {
    component: Icon,
    style: {marginLeft: scaleSizeW(10)},
    params: {size: setSpText(70)},
  },
};

// 渲染自定义组件
function renderDom(components = []) {
  return components.map((component, index) => {
    let defaultComponent = defaultComponents[component.type];
    let Dom;
    if (component.type === 'customised') {
      Dom = component.component;
    } else {
      Dom = defaultComponent.component;
    }
    const params = Object.assign({}, defaultComponent.params, component.params);
    const style = Object.assign({}, defaultComponent.style, component.style);
    return (
      <TouchableWithoutFeedback key={index} onPress={component.onPress}>
        <Dom {...params} style={style}>
          {params.text}
        </Dom>
      </TouchableWithoutFeedback>
    );
  });
}
export default function MenuBar(props) {
  // 左侧内容
  const [LeftDom, setLeftDom] = useState();
  useEffect(() => {
    const LeftDom = renderDom(props.leftComponents);
    setLeftDom(LeftDom);
  }, [props.leftComponents]);
  // 中间内容
  const [CenterDom, setCenterDom] = useState();
  useEffect(() => {
    const CenterDom = renderDom(props.centerComponents);
    setCenterDom(CenterDom);
  }, [props.centerComponents]);
  // 右侧内容
  const [RightDom, setRightDom] = useState();
  useEffect(() => {
    const RightDom = renderDom(props.rightComponents);
    setRightDom(RightDom);
  }, [props.rightComponents]);
  return (
    <View style={[styles.header, props.style]}>
      <View style={styles.left}>{LeftDom}</View>
      <View style={styles.center}>{CenterDom}</View>
      <View style={styles.right}>{RightDom}</View>
    </View>
  );
}
MenuBar.propTypes = {
  style: PropTypes.object,
  leftComponents: PropTypes.array,
  centerComponents: PropTypes.array,
  rightComponents: PropTypes.array,
};
MenuBar.defaultProps = {
  style: {},
  leftComponents: [],
  centerComponents: [],
  rightComponents: [],
};
