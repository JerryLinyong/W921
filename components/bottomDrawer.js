/**
 * Drawer抽屉
 * 1.呼叫进来时，点击卡片显示（可选择卡片）
 * 2.呼叫进来时，点击消息显示（只显示操作）
 *
 * @param type 'card' 或者 'message'
 * @param  callers     卡片显示信息
 * @param waitUpdateCallService 处理数据回调函数入参Object
 *
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native';
import proptypes from 'prop-types';
import {Button, Checkbox, Portal, Provider} from '@ant-design/react-native';
import {contains, filter} from 'ramda';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import AdvancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(relativeTime);
dayjs.extend(AdvancedFormat);
import 'dayjs/locale/zh-cn';
import {scaleSizeH, scaleSizeW, setSpText} from '../utils/screen';

const styles = StyleSheet.create({
  modalInfo: {
    flexDirection: 'row',
    padding: 4,
    justifyContent: 'space-around',
  },
  infoTypeText: {
    color: 'red',
    fontSize: setSpText(30),
    padding: 2,
    paddingHorizontal: 14,
    marginHorizontal: 8,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  timeText: {
    color: 'white',
    fontSize: setSpText(30),
  },
  modalBox: {
    maxHeight: scaleSizeH(300),
    marginVertical: 20,
    paddingHorizontal: 120,
  },
  infoBox: {
    borderRadius: 10,
    marginVertical: 10,
    overflow: 'hidden',
    flex: 1,
  },
  idText: {
    color: 'white',
    fontSize: setSpText(35),
  },
  modal: {
    width: '100%',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  modalContent: {
    width: '100%',
    backgroundColor: 'white',
  },
});

export default class BottomDrawer extends React.Component {
  static proptypes = {};
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      message: [],
      choosenCallers: [],
      callServices: [],
    };
    this.timer = null;
  }
  onClose = () => {
    this.setState({visible: false});
    clearTimeout(this.timer);
  };
  onOpen = () => {
    this.setState({visible: true});
    this.timer = setTimeout(() => {
      if (this.state.visible) {
        this.setState({visible: false});
      }
    }, 30000); //设置定时器，如果30秒后仍旧是打开状态则关闭
  };
  chooseCallers(callerSN) {
    if (contains(callerSN)(this.state.choosenCallers)) {
      this.setState({
        choosenCallers: filter(i => i !== callerSN)(this.state.choosenCallers),
      });
    } else {
      this.setState({
        choosenCallers: [...this.state.choosenCallers, callerSN],
      });
    }
  }
  getRefTime(beginTime) {
    return dayjs(beginTime)
      .locale('zh-cn')
      .fromNow();
  }
  setCallerServices(callServices) {
    this.setState({callServices, choosenCallers: [callServices[0].callerSN]});
  }
  setMessage(message) {
    this.setState({message});
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
    this.timer = null;
  }
  shouldComponentUpdate(nextProps, nextStates) {
    if (
      nextStates.visible !== this.state.visible ||
      nextStates.choosenCallers !== this.state.choosenCallers
    ) {
      return true;
    }
    return false;
  }
  render() {
    return (
      <Provider>
        {this.state.visible ? (
          <Portal>
            <TouchableNativeFeedback
              onPress={() => {
                this.onClose();
              }}>
              <View style={styles.modal}></View>
            </TouchableNativeFeedback>
            {this.state.callServices && this.props.type === 'card' ? (
              <View style={styles.modalContent}>
                <ScrollView style={styles.modalBox}>
                  {this.state.callServices.map(callService => (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        position: 'relative',
                        marginHorizontal: '15%',
                      }}
                      key={callService.serviceId}>
                      <View
                        style={[
                          styles.infoBox,
                          {
                            backgroundColor:
                              callService.keyMap[callService.key].color,
                          },
                        ]}>
                        <View style={styles.modalInfo}>
                          <Text style={styles.idText}>
                            {this.props.callers[callService.callerSN] &&
                            this.props.callers[callService.callerSN].memo
                              ? this.props.callers[callService.callerSN].memo
                              : callService.callerSN}
                          </Text>
                        </View>
                        <View
                          style={[
                            styles.modalInfo,
                            {backgroundColor: 'rgba(0,0,0,.1)'},
                          ]}>
                          <Text style={styles.timeText}>
                            {callService.timeText}
                          </Text>
                          <Text style={styles.infoTypeText}>
                            {callService.keyMap[callService.key].name}
                          </Text>
                        </View>
                      </View>
                      <View style={{position: 'absolute', right: -80}}>
                        <Checkbox
                          status={
                            contains(callService.callerSN)(
                              this.state.choosenCallers,
                            )
                              ? 'checked'
                              : 'unchecked'
                          }
                          onPress={() => {
                            this.chooseCallers(callService.callerSN);
                          }}
                        />
                      </View>
                    </View>
                  ))}
                </ScrollView>
                <Button
                  mode="outlined"
                  onPress={() => {
                    this.onClose();
                    this.state.choosenCallers.map(i =>
                      this.props.waitUpdateCallService({
                        serviceId: filter(item => item.callerSN === i)(
                          this.state.callServices,
                        )[0].serviceId,
                        callerSN: i,
                        key: 50,
                        tagName: filter(item => item.callerSN === i)(
                          this.state.callServices,
                        )[0].tagName,
                      }),
                    );
                  }}>
                  <Text style={{fontSize: setSpText(35)}}>{'确认收到'}</Text>
                </Button>
                <Button
                  mode="outlined"
                  onPress={() => {
                    this.onClose();
                    this.state.choosenCallers.map(i =>
                      this.props.waitUpdateCallService({
                        serviceId: filter(item => item.callerSN === i)(
                          this.state.callServices,
                        )[0].serviceId,
                        callerSN: i,
                        key: 10,
                        tagName: filter(item => item.callerSN === i)(
                          this.state.callServices,
                        )[0].tagName,
                      }),
                    );
                  }}>
                  <Text style={{fontSize: setSpText(35)}}>{'已处理'}</Text>
                </Button>
                <Button
                  mode="outlined"
                  onPress={() => {
                    this.onClose();
                    this.state.choosenCallers.map(i =>
                      this.props.waitUpdateCallService({
                        serviceId: filter(item => item.callerSN === i)(
                          this.state.callServices,
                        )[0].serviceId,
                        callerSN: i,
                        key: 40,
                        tagName: filter(item => item.callerSN === i)(
                          this.state.callServices,
                        )[0].tagName,
                      }),
                    );
                  }}>
                  <Text style={{fontSize: setSpText(35)}}> {'撤销'}</Text>
                </Button>
                <Button
                  mode="contained"
                  color="red"
                  style={{marginBottom: 30, marginHorizontal: 40}}
                  onPress={this.onClose}>
                  <Text style={{fontSize: setSpText(35)}}>{'取消'}</Text>
                </Button>
                <View style={{height: scaleSizeH(40)}}></View>
              </View>
            ) : (
              <View style={styles.modalContent}>
                <Button
                  smode="outlined"
                  onPress={() => {
                    this.onClose();
                    this.props.waitUpdateCallService({
                      serviceId: this.state.message.serviceId,
                      callerSN: this.state.message.callerSN,
                      tagName: this.state.message.tagName,
                      key: 50,
                    });
                  }}>
                  <Text style={{fontSize: setSpText(35)}}>{'确认收到'}</Text>
                </Button>
                <Button
                  mode="outlined"
                  onPress={() => {
                    this.onClose();
                    this.props.waitUpdateCallService({
                      serviceId: this.state.message.serviceId,
                      callerSN: this.state.message.callerSN,
                      tagName: this.state.message.tagName,
                      key: 10,
                    });
                  }}>
                  <Text style={{fontSize: setSpText(35)}}>{'已处理'}</Text>
                </Button>
                <Button
                  mode="outlined"
                  onPress={() => {
                    this.onClose();
                    this.props.waitUpdateCallService({
                      serviceId: this.state.message.serviceId,
                      callerSN: this.state.message.callerSN,
                      tagName: this.state.message.tagName,
                      key: 40,
                    });
                  }}>
                  <Text style={{fontSize: setSpText(35)}}>{'撤销'}</Text>
                </Button>
                <Button
                  mode="contained"
                  color="red"
                  style={{
                    marginBottom: 30,
                    marginHorizontal: 40,
                  }}
                  onPress={this.onClose}>
                  <Text style={{fontSize: setSpText(35)}}>{'取消'}</Text>
                </Button>
                <View style={{height: scaleSizeH(40)}} />
              </View>
            )}
          </Portal>
        ) : null}
      </Provider>
    );
  }
}
