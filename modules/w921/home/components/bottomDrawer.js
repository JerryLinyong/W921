/**
 * Drawer抽屉
 * 1.呼叫进来时，点击卡片显示（可选择卡片） type：'card'
 * 2.呼叫进来时，点击消息显示（只显示操作） type: 'message'
 * 
 * @param type :  _propTs.string     // 'card' 或者 'message'
 * @param  callers :  _propTs.array  //    卡片显示信息
 * @param buttonComponent :  _propTs.array //按钮组件
 *                              [{
 *                                  params: {}, // Button参数
 *                                  text: { style: { color: 'white' }, action: {name: '' , key: ''}} // Text样式及文本
 *                                  style: {} // Button样式
 *                                    }],
 * @param waitUpdateCallService function 点击按钮处理数据函数入参Object
 * 
 * 
 *  methods
 *    
 *  events
 * 
 *   <BottomDrawer
              callers={this.state.callers}
              ref="modal"
              type={this.state.type}
              buttonComponent={this.buttonComponent}
              waitUpdateCallService={caller => {
                this.waitUpdateCallService(caller)
              }}
            />
 *
 */

import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Modal, WhiteSpace, Checkbox } from '@ant-design/react-native'
import { contains, filter } from 'ramda'
import 'dayjs/locale/zh-cn'

const styles = StyleSheet.create({
  modalInfo: {
    flexDirection: 'row',
    padding: _reactH(4),
    justifyContent: 'space-around',
  },
  infoTypeText: {
    color: 'red',
    fontSize: _reactT(30),
    padding: _reactH(2),
    paddingHorizontal: _reactH(14),
    marginHorizontal: _reactH(8),
    backgroundColor: 'white',
    borderRadius: _reactH(4)
  },
  timeText: {
    color: 'white',
    fontSize: _reactT(30),
  },
  modalBox: {
    maxHeight: _reactH(300),
    marginVertical: _reactH(20),
    paddingHorizontal: _reactH(120),
  },
  modalBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginHorizontal: '15%'
  },
  infoBox: {
    borderRadius: _reactH(10),
    marginVertical: _reactH(10),
    overflow: 'hidden',
    flex: 1,
  },
  idText: {
    color: 'white',
    fontSize: _reactT(35),
  }
})

export default function BottomDrawer(props) {
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState([])
  const [choosenCallers, setChoosenCallers] = useState([])
  const [callServices, setCallServices] = useState([])
  function onClose() {
    setVisible(false)
    clearTimeout(this.timer)
  }
  function onOpen() {
    setVisible(true)
    this.timer = setTimeout(() => {
      if (visible) {
        setVisible(false)
      }
    }, 30000)//设置定时器，如果30秒后仍旧是打开状态则关闭
  }
  function chooseCallers(callerSN) {
    if (contains(callerSN)(choosenCallers)) {
      setChoosenCallers(filter(i => i !== callerSN)(choosenCallers))
    } else {
      setChoosenCallers([...choosenCallers, callerSN])
    }
  }
  function setCallerServices(callServices) {
    setCallServices(callServices)
    setChoosenCallers([callServices[0].callerSN])
  }
  function setMessages(msg) {
    setMessage(msg)
  }
  // componentWillUnmount() {
  //   clearTimeout(this.timer)
  //   this.timer = null
  // }
  // 操作按钮组件渲染
  function renderButton(components = []) {
    return components.map((component, index) => {
      return (
        <View key={index}>
          <Button onPress={() => {
            onClose
            if (component.text.action.key !== 30) {
              choosenCallers.map(i => props.waitUpdateCallService({
                serviceId: filter(item => item.callerSN === i)(callServices)[0].serviceId,
                callerSN: i,
                key: component.text.action.key,
                tagName: filter(item => item.callerSN === i)(callServices)[0].tagName
              }))
            }
          }} {...component.param} style={component.style}>
            <Text style={component.text.style}>{component.text.action.name}</Text>
          </Button>
          <WhiteSpace size="lg" />
        </View>)
    })
  }
  // 点击卡片渲染组件
  function renderCard() {
    return (
      <ScrollView style={styles.modalBox}>
        {callServices.map(callService => (
          <View style={styles.modalBoxContainer} key={callService.serviceId}>
            <View style={[styles.infoBox, { backgroundColor: callService.keyMap[callService.key].color }]}>
              <View style={styles.modalInfo}>
                <Text style={styles.idText}>{props.callers[callService.callerSN]
                  && props.callers[callService.callerSN].memo ? props.callers[callService.callerSN].memo : callService.callerSN}
                </Text>
              </View>
              <View style={[styles.modalInfo, { backgroundColor: 'rgba(0,0,0,.1)' }]}>
                <Text style={styles.timeText}>{(callService.timeText)}</Text>
                <Text style={styles.infoTypeText}>{callService.keyMap[callService.key].name}</Text>
              </View>
            </View>
            <View style={{ position: 'absolute', right: -_reactH(80) }}>
              <Checkbox
                checked={contains(callService.callerSN)(choosenCallers)}
                onChange={() => {chooseCallers(callService.callerSN) }}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    )
  }
  return (
    <Modal
      popup
      visible={visible}
      animationType="slide-up"
      maskClosable
      onClose={onClose}
    >
      {props.type == 'card' ? renderCard() : null}
      <View style={{ alignItems: 'center' }}>
        {renderButton(props.buttonComponent)}
      </View>
    </Modal>

  );
}

// export default class BottomDrawer extends React.Component {
//   static proptypes = {
//     type: _propTs.string,
//     callers: _propTs.array,
//     buttonComponent: _propTs.array
//   }
//   static defaultProps = {
//     type: '',
//     callers: [],
//     buttonComponent: []
//   };
//   constructor(props) {
//     super(props);
//     this.state = {
//       visible: false,
//       message: [],
//       choosenCallers: [],
//       callServices: []
//     };
//     this.timer = null
//   }
//   onClose = () => {
//     this.setState({ visible: false })
//     clearTimeout(this.timer)
//   }
//   onOpen = () => {
//     this.setState({ visible: true })
//     this.timer = setTimeout(() => {
//       if (this.state.visible) {
//         this.setState({ visible: false })
//       }
//     }, 30000)//设置定时器，如果30秒后仍旧是打开状态则关闭
//   }
//   chooseCallers(callerSN) {
//     if (contains(callerSN)(this.state.choosenCallers)) {
//       this.setState({
//         choosenCallers: filter(i => i !== callerSN)(this.state.choosenCallers)
//       })
//     } else {
//       this.setState({
//         choosenCallers: [...this.state.choosenCallers, callerSN]
//       })
//     }
//   }
//   setCallerServices(callServices) {
//     this.setState({ callServices, choosenCallers: [callServices[0].callerSN] })
//   }
//   setMessage(message) {
//     this.setState({ message })
//   }
//   componentWillUnmount() {
//     clearTimeout(this.timer)
//     this.timer = null
//   }
//   // 操作按钮组件渲染
//   renderButton(components = []) {
//     return components.map((component, index) => {
//       return (
//         <View key={index}>
//           <Button onPress={() => {
//             this.onClose()
//             if (component.text.action.key !== 30) {
//               this.state.choosenCallers.map(i => this.props.waitUpdateCallService({
//                 serviceId: filter(item => item.callerSN === i)(this.state.callServices)[0].serviceId,
//                 callerSN: i,
//                 key: component.text.action.key,
//                 tagName: filter(item => item.callerSN === i)(this.state.callServices)[0].tagName
//               }))
//             }
//           }} {...component.param} style={component.style}>
//             <Text style={component.text.style}>{component.text.action.name}</Text>
//           </Button>
//           <WhiteSpace size="lg" />
//         </View>)
//     })
//   }
//   // 点击卡片渲染组件
//   renderCard() {
//     return (
//       <ScrollView style={styles.modalBox}>
//         {this.state.callServices.map(callService => (
//           <View style={styles.modalBoxContainer} key={callService.serviceId}>
//             <View style={[styles.infoBox, { backgroundColor: callService.keyMap[callService.key].color }]}>
//               <View style={styles.modalInfo}>
//                 <Text style={styles.idText}>{this.props.callers[callService.callerSN]
//                   && this.props.callers[callService.callerSN].memo ? this.props.callers[callService.callerSN].memo : callService.callerSN}
//                 </Text>
//               </View>
//               <View style={[styles.modalInfo, { backgroundColor: 'rgba(0,0,0,.1)' }]}>
//                 <Text style={styles.timeText}>{(callService.timeText)}</Text>
//                 <Text style={styles.infoTypeText}>{callService.keyMap[callService.key].name}</Text>
//               </View>
//             </View>
//             <View style={{ position: 'absolute', right: -_reactH(80) }}>
//               <Checkbox
//                 checked={contains(callService.callerSN)(this.state.choosenCallers)}
//                 onChange={() => { this.chooseCallers(callService.callerSN) }}
//               />
//             </View>
//           </View>
//         ))}
//       </ScrollView>
//     )
//   }
//   shouldComponentUpdate(nextProps, nextStates) {
//     if (
//       nextStates.visible !== this.state.visible ||
//       nextStates.choosenCallers !== this.state.choosenCallers
//     ) {
//       return true
//     }
//     return false
//   }
//   render() {
//     return (
//       <Modal
//         popup
//         visible={this.state.visible}
//         animationType="slide-up"
//         maskClosable
//         onClose={this.onClose}
//       >
//         {this.props.type == 'card' ? this.renderCard() : null}
//         <View style={{ alignItems: 'center' }}>
//           {this.renderButton(this.props.buttonComponent)}
//         </View>
//       </Modal>

//     );
//   }
// }
