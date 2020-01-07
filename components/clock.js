/**
 * 时间显示器,每秒更新时间显示
 *  通过设置style来变换时间的颜色和大小
 */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import dayjs from 'dayjs';
const styles = StyleSheet.create({
  clock: {
    alignItems: 'center',
  },
});
export default class TimeRecorder extends React.Component {
  static proptypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);
    const weeksArray = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    this.state = {localDate: ' ', localTime: '', week: ''};
    this.timer = setInterval(() => {
      let day = dayjs();
      let week = _t(`common.${weeksArray[day.day()]}`);
      let localDate = day.format('YYYY/MM/DD');
      let localTime = day.format('HH:mm:ss');
      this.setState({localDate, localTime, week});
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const textStyle = {
      color: this.props.style.color,
      fontSize: this.props.style.fontSize,
    };
    return (
      <View style={styles.clock}>
        <Text style={textStyle}>
          {this.state.localDate + ' ' + this.state.week}
        </Text>
        <Text style={textStyle}>{this.state.localTime}</Text>
      </View>
    );
  }
}
