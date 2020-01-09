import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { filter } from 'ramda'
// import Menu from '../../../components/menu'

export class Toolbar extends Component {
  // toggleMenu = () => {
  //   this.refs.menu.toggle()
  // }
  // onAreaChange(id) {
  //   console.log(id)
  // }
  render() {
    return (
      <View style={{ backgroundColor: 'rgb(74,125,200)', flexDirection: 'row', borderWidth: 1, height: _reactH(100), justifyContent: 'space-between', alignItems: 'center', borderColor: '#00BFFF', paddingLeft: 10 }}>
        {/* 操作栏 */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: _reactW(110) }}>
          <TouchableWithoutFeedback onPress={() => this.props.toggleMenu()}>
            <Icon name="menu" color='white' size={_reactT(60)} />
          </TouchableWithoutFeedback>
          {/* <Menu
            ref='menu'
            navigation={this.props.navigation}
            current={this.props.curentArea} menu={this.props.area} onAreaChange={(id) => { this.onAreaChange(id) }}
          /> */}
          <Text style={{ color: 'white', fontSize: _reactT(40) }}>{this.props.area.filter(item => item.id === this.props.curentArea)[0].name}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: _reactW(110) }}>
          <TouchableWithoutFeedback onPress={() => this.props.onchangeNum(1)}>
            <Icon name="border-all-variant" color={this.props.num === 1 ? 'orange' : 'white'} size={_reactT(60)} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.props.onchangeNum(2)}>
            <Icon name="view-grid" color={this.props.num === 2 ? 'orange' : 'white'} size={_reactT(60)} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.props.onchangeNum(3)}>
            <Icon name="apps" color={this.props.num === 3 ? 'orange' : 'white'} size={_reactT(60)} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}