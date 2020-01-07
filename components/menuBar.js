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
 *    <MenuBar
 *      theme={this.props.theme}
 *      title="无线管理主机"
 *      centerComponents={[{type: 'timer'}]}
 *      rightComponents={[]}
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
    theme: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    centerComponents: PropTypes.array,
    rightComponents: PropTypes.array,
  };
  static defaultProps = {
    title: '',
    subTitle: '',
    theme: '',
    centerComponents: [],
    rightComponents: [],
  };
  constructor(props) {
    super(props);
    const primaryText = props.theme.get('primaryText');
    this.defaultComponents = {
      view: {screen: View},
      clock: {
        screen: Clock,
        style: {color: primaryText, fontSize: setSpText(40)},
      },
      text: {screen: Text, style: {color: primaryText}},
      icon: {
        screen: Icon,
        params: {color: primaryText, size: setSpText(70)},
        style: {marginLeft: scaleSizeW(10)},
      },
    };
  }
  // 渲染自定义组件
  renderDom(components = []) {
    return components.map((component, index) => {
      let defaultComponent =
        this.defaultComponents[component.type] || this.defaultComponents.view;
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
    const primaryColor = this.props.theme.get('primary');
    const primaryText = this.props.theme.get('primaryText');
    return (
      <View style={[styles.header, {backgroundColor: primaryColor}]}>
        <View style={styles.left}>
          <Text style={[styles.title, {color: primaryText}]}>
            {this.props.title}
          </Text>
          {this.props.subTitle ? (
            <Text style={[styles.subTitle, {color: primaryText}]}>
              {this.props.subTitle}
            </Text>
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
