/**
 * 时间显示器,每秒更新时间显示
 * 通过设置style来变换时间的颜色和大小
 *  props
 *    style // 时钟的文字样式
 */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import dayjs from 'dayjs';
const styles = StyleSheet.create({
  clock: {
    alignItems: 'center',
  },
});
const weeks = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
export default class Clock extends React.Component {
  static proptypes = {style: PropTypes.object};
  static defaultProps = {style: {}};
  constructor(props) {
    super(props);
    this.timer = setInterval(() => {
      this.setState(this.setClockInfo());
    }, 1000);
    this.state = this.setClockInfo();
  }
  setClockInfo() {
    let day = dayjs();
    let week = _t(`common.${weeks[day.day()]}`);
    let localDate = day.format('YYYY/MM/DD');
    let localTime = day.format('HH:mm:ss');
    return {week, localDate, localTime};
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <View style={styles.clock}>
        <Text style={this.props.style}>
          {this.state.localDate + ' ' + this.state.week}
        </Text>
        <Text style={this.props.style}>{this.state.localTime}</Text>
      </View>
    );
  }
}
