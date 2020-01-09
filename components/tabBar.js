/**
 *  title组件
 *  props
 *    style: {} // 字体通用样式
 *    title: '' // 主标题
 *    subTitle: '' // 次标题
 */
import React, {useState, useEffect} from 'react';
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

export default function Title(props) {
  console.log(props,'gaga');
  return <View></View>;
}
Title.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};
Title.defaultProps = {
  style: {},
  title: '',
  subTitle: '',
};
