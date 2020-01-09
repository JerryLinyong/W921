/**
 * 底部tab
 */
import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableNativeFeedback, FlatList, Dimensions, TouchableWithoutFeedback, DeviceEventEmitter } from 'react-native'
// import {_reactH, _reactW, _reactT} from '../../../utils/screen'
const styles = StyleSheet.create({
  badgeBg: {
    position: 'absolute',
    right: 4,
    top: 4,
    minWidth: _reactW(14),
    minHeight: _reactH(24),
    paddingHorizontal: 2,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
})
export class BottomTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 1,
      tabMenu: [{ id: 1, name: '全部' },{ id: 2, name: '服务' },{ id: 3, name: '点菜' },{ id: 4, name: '结账' },{ id: 5, name: '通知' },{ id: 6, name: '告警' }]
    }
  }
  onTabChange(tabId){
    this.setState({currentTab: tabId})
  }
  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: _reactH(100), borderWidth: 1, alignItems: 'center',backgroundColor: 'rgb(74,125,200)', borderColor: '#00BFFF', }}>
        {this.state.tabMenu.map((menu) => {
          return (<TouchableWithoutFeedback
            key={menu.id}
            onPress={() => {
            this.setState({
              currentTab: menu.id
            })
            this.onTabChange(menu.id)  //按area的id来进行tab的选择
          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', height: '100%', width: _reactW(93), alignItems: 'center',backgroundColor: this.state.currentTab === menu.id ? '#32CD32': 'transparent' }}>
              <Text style={{ color: 'white', fontSize: _reactT(40) }}>{menu.name}</Text>
              <View style={[styles.badgeBg, { backgroundColor: 'red' }]}>
                <Text style={{ fontSize: _reactT(25), color: 'white' }}>9</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>)
        })}
      </View>

    )
  }
}