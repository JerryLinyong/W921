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
 *      return {color:'white',backgroundColor:'red'}
 *    }
 *    setMenuCenterComponents(){
 *      return [{type: 'timer'}]
 *    }
 *    setMenuRightComponents(){
 *      return []
 *    }
 *    <MenuBar
 *      style={this.state.menuStyle}
 *      title="无线管理主机"
 *      centerComponents={this.state.menuCenterComponents}
 *      rightComponents={this.state.menuRightComponents}
 *    />
 */
import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Clock from './clock';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: scaleSizeH(130),
    padding: scaleSizeH(40),
  },
  title: {
    fontSize: setSpText(50),
  },
  subTitle: {
    fontSize: setSpText(36),
  },
  center: {
    flexDirection: 'row',
  },
  right: {
    flexDirection: 'row',
  },
});

export default class MenuBar extends Component {
  static proptypes = {
    style: PropTypes.object,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    centerComponents: PropTypes.array,
    rightComponents: PropTypes.array,
  };
  static defaultProps = {
    title: '',
    subTitle: '',
    style: {},
    centerComponents: [],
    rightComponents: [],
  };
  constructor(props) {
    super(props);
    this.state = {
      defaultComponents: this.setDefaultComponents(props.style.color),
      headerStyle: this.setHeaderStyle(props.style.backgroundColor),
      titleStyle: this.setTitleStyle(props.style.color),
      subTitleStyle: this.setSubTitleStyle(props.style.color),
    };
  }
  setTitleStyle(color) {
    return Object.assign({}, styles.title, {color: color});
  }
  setSubTitleStyle(color) {
    return Object.assign({}, styles.subTitle, {
      color: color,
    });
  }
  setHeaderStyle(backgroundColor) {
    return Object.assign({}, styles.header, {backgroundColor: backgroundColor});
  }
  // 设置默认的组件
  setDefaultComponents(color) {
    return {
      view: {screen: View},
      clock: {
        screen: Clock,
        style: {color: color, fontSize: setSpText(40)},
      },
      text: {screen: Text, style: {color: color}},
      icon: {
        screen: Icon,
        params: {color: color, size: setSpText(70)},
        style: {marginLeft: scaleSizeW(10)},
      },
    };
  }
  // 渲染自定义组件
  renderDom(components = []) {
    return components.map((component, index) => {
      let defaultComponent =
        this.state.defaultComponents[component.type] ||
        this.state.defaultComponents.view;
      let Dom;
      if (component.type === 'customised') {
        Dom = component.component;
      } else {
        Dom = defaultComponent.screen;
      }
      const params = Object.assign(
        {},
        defaultComponent.params,
        component.params,
      );
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
  render() {
    return (
      <View style={this.state.headerStyle}>
        <View style={styles.left}>
          <Text style={this.state.titleStyle}>{this.props.title}</Text>
          {this.props.subTitle ? (
            <Text style={this.state.subTitleStyle}>{this.props.subTitle}</Text>
          ) : null}
        </View>
        <View style={styles.center}>
          {this.renderDom(this.props.centerComponents)}
        </View>
        <View style={styles.right}>
          {this.renderDom(this.props.rightComponents)}
        </View>
      </View>
    );
  }
}
