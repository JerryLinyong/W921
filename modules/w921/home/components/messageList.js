/**
 * 实时操作
 */
import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableWithoutFeedback } from 'react-native'
// import { scaleSizeH, scaleSizeW, setSpText } from '../../../utils/screen'
import Color from 'color'
const styles = StyleSheet.create({
  tag: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: setSpText(25),
    textAlign: 'center'
  },
})
/* 单条消息*/
export class Message extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => { this.props.openDrawer('message') }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginLeft: 20, borderLeftWidth: 1, borderColor: '#00BFFF', position: 'relative', paddingTop: 20 }}>
          <View style={{ width: scaleSizeW(7), height: scaleSizeH(20), backgroundColor: 'red', borderRadius: 20, position: 'absolute', left: -7 }} />
          <View style={{ paddingLeft: 10 }}>
            <Text style={{ fontSize: setSpText(30), color: Color('rgb(74,125,200)').lighten(0.2) }}>{this.props.name}</Text>
            <Text style={{ color: Color('rgb(74,125,200)').lighten(0.5) }}>{this.props.time}</Text>
          </View>
          <View style={{ height: scaleSizeH(50), width: scaleSizeW(30), backgroundColor: this.props.color, borderRadius: 10, justifyContent: 'center' }}>
            <Text style={styles.tag}>{this.props.callType} </Text>
          </View>
        </View >
      </TouchableWithoutFeedback>
    )
  }
}
export class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // messages: [
      //   { id: 1, name: '中餐厅大厅1号桌', callType: '服务', color: '#32CD32', time: '5分钟前', serviceId: 1, callerSN: 'sn1', tagName: '呼叫' },
      //   { id: 2, name: '中餐厅大厅2号桌', callType: '点菜', color: 'orange', time: '7分钟前', serviceId: 1, callerSN: 'sn1', tagName: '结账' },
      //   { id: 3, name: '中餐厅大厅3号桌', callType: '点菜', color: 'orange', time: '2分钟前', serviceId: 2, callerSN: 'sn2', tagName: '呼叫' },
      //   { id: 4, name: '中餐厅大厅4号桌', callType: '结账', color: 'red', time: '几秒前', serviceId: 2, callerSN: 'sn2', tagName: '结账' },
      //   { id: 5, name: '中餐厅大厅5号桌', callType: '结账', color: 'red', time: '3分钟前', serviceId: 1, callerSN: 'sn1', tagName: '呼叫' },
      //   { id: 6, name: '中餐厅大厅6号桌', callType: '服务', color: '#32CD32', time: '1分钟前', serviceId: 1, callerSN: 'sn1', tagName: '呼叫' },
      //   { id: 7, name: '中餐厅大厅7号桌', callType: '服务', color: '#32CD32', time: '几秒前', serviceId: 2, callerSN: 'sn2', tagName: '呼叫' }]
    }
  }
  render() {
    return (
      <FlatList
        data={this.props.data}
        keyExtractor={(item, index) => (item.id + '')}
        showsVerticalScrollIndicator={false}
        windowSize={200}
        onEndReachedThreshold='0.4'
        style={{ borderWidth: 1, borderColor: '#00BFFF', paddingTop: 30 }}
        // onEndReached={() => this.loadMore()}
        ListFooterComponent={<View style={{ height: scaleSizeH(60) }}></View>}
        renderItem={({ item }) =>
          <Message
            name={item.name}
            callType={item.callType}
            color={item.color}
            time={item.time}
            openDrawer={(type) => this.props.openDrawer(type, { serviceId: item.serviceId, callerSN: item.callerSN, tagName: item.tagName })} />
        }
      />
    )
  }
}