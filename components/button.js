/**
 * 通用的按钮组件,支持2s的防抖,点击2s的透明效果
 *  props
 *    style: _propTs.object, // 设置button的外边距,宽高
 *    icon: _propTs.string, // icon的名称
 *    color: _propTs.string, // icon和字体的颜色
 *    size: _propTs.number, // icon和字体的大小
 *    children: _propTs.string, // 文本内容
 *    loading: _propTs.boolean, // 是否在加载
 *    disabled: _propTs.boolean, // 是否禁止
 */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ActivityIndicator} from '@ant-design/react-native';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: _reactT(20),
    borderWidth: _onePx,
    borderColor: 'grey',
    paddingHorizontal: _reactW(20),
    paddingVertical: _reactH(20),
    marginHorizontal: _reactW(20),
    marginVertical: _reactH(20),
    backgroundColor: '#1890ff',
  },
  text: {
    flex: 1,
    textAlign: 'center',
  },
});

export default function Button(props) {
  const [buttonStyle, setButtonStyle] = useState({});
  useEffect(() => {
    if (props.disabled || props.loading) {
      setButtonStyle(prev => ({...prev, opacity: 0.5}));
    }
  }, [props.disabled, props.loading]);
  function onPress() {
    // 设置防抖
    if (buttonStyle.opacity) return;
    // 设置点击样式
    setButtonStyle({opacity: 0.5});
    setTimeout(() => {
      if (setButtonStyle) setButtonStyle({});
    }, 2000);
    if (typeof props.onPress === 'function') {
      props.onPress();
    }
  }
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.button, props.style, buttonStyle]}>
        <Icon name={props.icon} color={props.color} size={props.size} />
        <Text style={[styles.text, {color: props.color, fontSize: props.size}]}>
          {props.children}
        </Text>
        <ActivityIndicator
          animating={props.loading}
          size="small"
          color={props.color}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
Button.propTypes = {
  style: _propTs.object,
  icon: _propTs.string,
  color: _propTs.string,
  size: _propTs.number,
  children: _propTs.string,
  loading: _propTs.bool,
  disabled: _propTs.bool,
};
Button.defaultProps = {
  style: {},
  icon: 'check',
  color: 'white',
  size: _reactT(40),
  children: '',
  loading: false,
  disabled: false,
};
