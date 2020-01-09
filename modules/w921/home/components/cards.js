/**
 * 卡片列表
 */
import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableNativeFeedback, FlatList, Dimensions, TouchableWithoutFeedback, DeviceEventEmitter } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Color from 'color'
// import BottomDrawer from '../../../components/bottomDrawer'
const styles = StyleSheet.create({
  container: {
    width: _reactW(162),
    height: _reactH(210),
    borderWidth: 1,
    borderColor: Color('rgb(74,125,200)').lighten(0.2),
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginRight: 35
  },
  cardName: {
    fontSize: _reactT(40),
    paddingTop: _reactH(50),
    color: Color('rgb(74,125,200)').lighten(0.2)
  },
  tools: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: Color('blue').lighten(0.9),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: _reactW(102)
  }
})
export class Card extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => { this.props.openDrawer('card') }}>
        <View style={styles.container}>
          <Text style={styles.cardName}>{this.props.zone}</Text>
          <View style={styles.tools}>
            <Text style={{ fontSize: _reactT(40), color: Color('rgb(74,125,200)').lighten(0.2) }}>{this.props.cardName}</Text>
            <View style={styles.icons}>
              <Icon name="phone-classic" color='white' size={30} />
              <Icon name="camcorder" color='white' size={30} />
              <Icon name="alarm-light" color='white' size={30} />
              {/* 锁定置顶 */}
              <TouchableWithoutFeedback onPress={() => { console.log('press icon') }}>
                <Icon name="lock-outline" color='white' size={30} />
              </TouchableWithoutFeedback>

            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export class CardListWithoutData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [
        { id: 1, zone: '大厅1号桌', name: 'A01', color: '#32CD32' },
        { id: 2, zone: '大厅2号桌', name: 'A02', color: 'red' },
        { id: 3, zone: '大厅3号桌', name: 'A03', color: 'gray' },
        { id: 4, zone: '大厅4号桌', name: 'A04', color: 'orange' },
        { id: 5, zone: '大厅5号桌', name: 'A04', color: '#32CD32' },
        { id: 6, zone: '大厅6号桌', name: 'A04', color: 'orange' },
        { id: 7, zone: '大厅7号桌', name: 'A02', color: 'red' },
        { id: 8, zone: '大厅8号桌', name: 'A02', color: 'red' },
        { id: 9, zone: '大厅9号桌', name: 'A02', color: 'gray' },
        { id: 10, zone: '大厅10号桌', name: 'A02', color: 'orange' },
        { id: 11, zone: '大厅11号桌', name: 'A02', color: 'orange' },
        { id: 12, zone: '大厅12号桌', name: 'A02', color: 'orange' },
        { id: 13, zone: '大厅13号桌', name: 'A02', color: 'orange' },
        { id: 14, zone: '大厅14号桌', name: 'A02', color: 'orange' }
      ],
    }
  }
  render() {
    return (
      <View style={{ borderRightWidth: 1, height: _reactH(1070), borderRightColor: '#00BFFF', paddingHorizontal: 20, paddingVertical: 10 }}>
        <FlatList
          // data={this.props.homeDefaultViewStyle === 'default' ? this.state.cards.slice(0, this.state.selectedNum) : this.state.cards}
          key={this.props.num}
          data={this.state.cards}
          numColumns={this.props.num}
          keyExtractor={(item, index) => (item.id + '')}
          showsVerticalScrollIndicator={false}
          // getItemLayout={(data, index) => (
          //   { length: this.state.itemHeight, offset: this.state.itemHeight * (Math.floor(index / this.state.num)), index }
          // )}
          windowSize={200}
          onEndReachedThreshold='0.4'
          // onEndReached={() => this.loadMore()}
          ListFooterComponent={<View style={{ height: 60 }}></View>}
          renderItem={({ item }) =>
            <Card zone={item.zone} cardName={item.name} bgColor={item.color} openDrawer={(type) => this.props.openDrawer(type)} />
          }
        />
      </View>
    )
  }
}