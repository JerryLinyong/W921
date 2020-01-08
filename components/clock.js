/**
 * 时间显示器,每秒更新时间显示
 * 通过设置style来变换时间的颜色和大小
 *  props
 *    style // 时钟的文字样式
 */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import dayjs from 'dayjs';
const styles = StyleSheet.create({
  clock: {
    alignItems: 'center',
  },
});
const weeks = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
function getClockInfo() {
  let day = dayjs();
  let week = _t(`common.${weeks[day.day()]}`);
  let localDate = day.format('YYYY/MM/DD');
  let localTime = day.format('HH:mm:ss');
  return {week, localDate, localTime};
}
export default function Clock(props) {
  const [clock, setClock] = useState({});
  useEffect(() => {
    setClock(getClockInfo());
    let timer = setInterval(() => {
      setClock(getClockInfo());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <View style={styles.clock}>
      <Text style={props.style}>{clock.localDate + ' ' + clock.week}</Text>
      <Text style={props.style}>{clock.localTime}</Text>
    </View>
  );
}

Clock.propTypes = {style: PropTypes.object};
Clock.defaultProps = {style: {}};
