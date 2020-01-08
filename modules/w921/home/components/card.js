/**
 * 显示单个卡片信息
 *  props
 *    cardWidth: PropTypes.number,    // 卡片宽度
 *    cardHeight: PropTypes.number,   // 卡片高度
 *    theme: PropTypes.string,        // 主题
 *    position: PropTypes.string,     // 卡片位置中间
 *    number: PropTypes.string,       // 卡片名称
 *    rightComponents: PropTypes.array, // 右侧的图标组件
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
 *       cardWidth={scaleSizeW(162)}
 *       cardHeight={scaleSizeH(210)}
 *       position={item.zone}
 *       cardName={item.name}
 *       rightComponents={this.iconComponents}
 *       onCardPress={() => this.props.openDrawer('card')} />
 *  
 */
import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types'
import Color from 'color'

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: scaleSizeW(10),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scaleSizeW(20),
    marginRight: scaleSizeW(20)
  },
  position: {
    fontSize: setSpText(40),
    paddingTop: scaleSizeH(50)
  },
  tools: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    borderBottomLeftRadius: scaleSizeW(10),
    borderBottomRightRadius: scaleSizeW(10),
  },
  icons: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: scaleSizeW(102)
  }
})

export default function Card(props) {
  const primaryColor = themeProvider.get(props.theme).primary;
  return (
    <TouchableWithoutFeedback onPress={props.onCardPress}>
      <View style={[styles.container, { width: props.cardWidth, height: props.cardHeight, borderColor: Color(primaryColor).lighten(0.2) }]}>
        <Text style={[styles.position, { color: Color(primaryColor).lighten(0.2) }]}>{props.position}</Text>
        <View style={[styles.tools, { backgroundColor: Color(primaryColor).lighten(0.7) }]}>
          <Text style={{ fontSize: setSpText(40), color: Color(primaryColor).lighten(0.2) }}>{props.cardName}</Text>
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
  cardWidth: PropTypes.number,
  cardHeight: PropTypes.number,
  theme: PropTypes.string,
  position: PropTypes.string,
  number: PropTypes.string,
  rightComponents: PropTypes.array,
};
Card.defaultProps = {
  cardWidth: 0,
  cardHeight: 0,
  theme: '',
  position: '',
  cardName: '',
  rightComponents: [],
};
