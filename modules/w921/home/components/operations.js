import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {MessageList} from './messageList';
// import { scaleSizeH, scaleSizeW, setSpText } from '../../../utils/screen'

const styles = StyleSheet.create({
  titleContainer: {
    height: scaleSizeH(100),
    borderWidth: 1,
    justifyContent: 'center',
    borderColor: '#00BFFF',
    backgroundColor: 'rgb(74,125,200)',
  },
  title: {
    color: 'white',
    fontSize: setSpText(40),
    paddingLeft: 10,
  },
});
export class Operations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          id: 1,
          name: '中餐厅大厅1号桌',
          callType: '服务',
          color: '#32CD32',
          time: '5分钟前',
          serviceId: 1,
          callerSN: 'sn1',
          tagName: '呼叫',
        },
        {
          id: 2,
          name: '中餐厅大厅2号桌',
          callType: '点菜',
          color: 'orange',
          time: '7分钟前',
          serviceId: 1,
          callerSN: 'sn1',
          tagName: '结账',
        },
        {
          id: 3,
          name: '中餐厅大厅3号桌',
          callType: '点菜',
          color: 'orange',
          time: '2分钟前',
          serviceId: 2,
          callerSN: 'sn2',
          tagName: '呼叫',
        },
        {
          id: 4,
          name: '中餐厅大厅4号桌',
          callType: '结账',
          color: 'red',
          time: '几秒前',
          serviceId: 2,
          callerSN: 'sn2',
          tagName: '结账',
        },
        {
          id: 5,
          name: '中餐厅大厅5号桌',
          callType: '结账',
          color: 'red',
          time: '3分钟前',
          serviceId: 1,
          callerSN: 'sn1',
          tagName: '呼叫',
        },
        {
          id: 6,
          name: '中餐厅大厅6号桌',
          callType: '服务',
          color: '#32CD32',
          time: '1分钟前',
          serviceId: 1,
          callerSN: 'sn1',
          tagName: '呼叫',
        },
        {
          id: 7,
          name: '中餐厅大厅7号桌',
          callType: '服务',
          color: '#32CD32',
          time: '几秒前',
          serviceId: 2,
          callerSN: 'sn2',
          tagName: '呼叫',
        },
      ],
    };
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 10}}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>实时操作</Text>
        </View>
        {/* 内容 */}
        <View style={{height: scaleSizeH(1170), position: 'relative'}}>
          {/* 最新消息 */}
          <MessageList
            openDrawer={(type, message) => this.props.openDrawer(type, message)}
            data={this.state.messages}
          />
          {/* 一键操作按钮 */}
          <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
            <Button
              style={{
                backgroundColor: '#32CD32',
                marginVertical: 5,
                marginHorizontal: 20,
                borderRadius: 10,
              }}
              onPress={() => {
                this.state.messages.map(i =>
                  this.props.waitUpdateCallService({
                    serviceId: i.serviceId,
                    callerSN: i.callerSN,
                    key: 10,
                    tagName: i.tagName,
                  }),
                );
              }}>
              <Icon name="check-underline" color="gray" size={setSpText(50)} />
              <Text style={{fontSize: setSpText(50), color: 'white'}}>
                一键处理
              </Text>
            </Button>
            <Button
              style={{
                backgroundColor: 'red',
                marginVertical: 5,
                marginHorizontal: 20,
                borderRadius: 10,
              }}
              onPress={() => {
                {
                  this.state.messages.map(i =>
                    this.props.waitUpdateCallService({
                      serviceId: i.serviceId,
                      callerSN: i.callerSN,
                      key: 40,
                      tagName: i.tagName,
                    }),
                  );
                }
              }}>
              <Icon
                name="cancel"
                color="gray"
                size={setSpText(50)}
                style={{marginRight: 20}}
              />
              <Text style={{fontSize: setSpText(50), color: 'white'}}>
                一键忽略
              </Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
