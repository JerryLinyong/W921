/**
 *  title组件
 *  props
 *    style: {} // 字体通用样式
 *    title: '' // 主标题
 *    subTitle: '' // 次标题
*/
import React from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: setSpText(50),
  },
  subTitle: {
    fontSize: setSpText(36),
  },
});

export default class Title extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    title: PropTypes.string,
    subTitle: PropTypes.string,
  };
  static defaultProps = {
    style: {},
    title: '',
    subTitle: '',
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text style={[styles.title, this.props.style]}>{this.props.title}</Text>
        {this.props.subTitle ? (
          <Text style={[styles.subTitle, this.props.style]}>
            {this.props.subTitle}
          </Text>
        ) : null}
      </View>
    );
  }
}
