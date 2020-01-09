/**
 * 显示单个卡片信息
 *  props
 *    cardWidth: _propTs.number,    // 卡片宽度
 *    cardHeight: _propTs.number,   // 卡片高度
 *    theme: _propTs.string,        // 主题
 *    position: _propTs.string,     // 卡片位置中间
 *    number: _propTs.string,       // 卡片名称
 *    rightComponents: _propTs.array, // 右侧的图标组件
 *                                   [{
 *                                      params: {}, // 参数
 *                                      onIconPress: function, // 点击图标的事件
 *                                      style: {} //样式
 *                                    }],
 *  onCardPress: function, // 点击卡片的事件
 *  methods
 *    
 *  events
 *
 *  实例
 *    import Card from './card'
 *   <Card
 *       cardWidth={_reactW(162)}
 *       cardHeight={_reactH(210)}
 *       position={item.zone}
 *       cardName={item.name}
 *       rightComponents={this.iconComponents}
 *       onCardPress={() => this.props.openDrawer('card')} />
 *  
 */
import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import _propTs from 'prop-types'
import Color from 'color'

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: _reactW(10),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: _reactW(20),
    marginRight: _reactW(20)
  },
  position: {
    fontSize: _reactT(40),
    paddingTop: _reactH(50)
  },
  tools: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    borderBottomLeftRadius: _reactW(10),
    borderBottomRightRadius: _reactW(10),
  },
  icons: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: _reactW(102)
  }
})

export default function Card(props) {
  const primaryColor = themeProvider.get(props.theme).primary;
  return (
    <TouchableWithoutFeedback onPress={props.onCardPress}>
      <View style={[styles.container, { width: props.cardWidth, height: props.cardHeight, borderColor: Color(primaryColor).lighten(0.2) }]}>
        <Text style={[styles.position, { color: Color(primaryColor).lighten(0.2) }]}>{props.position}</Text>
        <View style={[styles.tools, { backgroundColor: Color(primaryColor).lighten(0.7) }]}>
          <Text style={{ fontSize: _reactT(40), color: Color(primaryColor).lighten(0.2) }}>{props.cardName}</Text>
          <View style={styles.icons}>
            {props.rightComponents.map((component, index) => {
              return (<TouchableWithoutFeedback onPress={() => component.onIconPress()} key={index} >
                <Icon {...component.params} style={{ color: Color(primaryColor).lighten(0.2) }} />
              </TouchableWithoutFeedback>)
            })}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
Card.proptypes = {
  cardWidth: _propTs.number,
  cardHeight: _propTs.number,
  theme: _propTs.string,
  position: _propTs.string,
  number: _propTs.string,
  rightComponents: _propTs.array,
};
Card.defaultProps = {
  cardWidth: 0,
  cardHeight: 0,
  theme: '',
  position: '',
  cardName: '',
  rightComponents: [],
};
