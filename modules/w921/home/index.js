import React from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {updateMySuccess} from '@store/my/actions';
import {CardListWithoutData} from './components/cards';
import {BottomTab} from './components/bottomTab';
import {Operations} from './components/operations';
import {Toolbar} from './components/topToolbar';
import Menu from '@components/menu';
import Header from '@components/menuBar';
import BottomDrawer from '@components/bottomDrawer';
import {Button, ActivityIndicator, Toast} from '@ant-design/react-native';
import Test from '@components/test';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.headerStyle = {
      backgroundColor: props.theme.get('primary'),
      color: props.theme.get('primaryText'),
    };
    this.headerCenterComponents = [{type: 'clock'}];
    this.headerRightComponents = [
      'home',
      'email',
      'chart-pie',
      'laptop',
      'settings-outline',
    ].map(iconName => ({
      type: 'icon',
      params: {
        name: iconName,
      },
      onPress: this.pressIcon.bind(this, iconName),
    }));
    this.state = {
      count: 0,
      num: 3,
      curentArea: '1',
      area: [
        {id: '1', name: '泉州美一分店'},
        {id: '2', name: '福州美一分店'},
        {id: '3', name: '厦门美一分店'},
      ],
      type: 'card',
      callers: {
        sn1: {
          sn: 'sn1', //  呼叫器序列号
          regTime: '', //  呼叫器登记到系统的时间
          type: 0, //呼叫器类型 0普通呼叫器。1 NB呼叫器
          name: '',
          keyMap: '', //  按键定义
          gateways: [], //  登记该呼叫器接收到消息的网关
          limitGateways: [], //  默认情况下会接收所有消息,可以指定仅仅接收来自该呼叫器的呼叫消息
          cardID: ['1'], // 呼叫器绑定的卡片ID
          memo: '', //呼叫器备注
          selected: false, //
          priority: 0, //呼叫器的优先级
        },
        sn2: {
          sn: 'sn2', //  呼叫器序列号
          regTime: '', //  呼叫器登记到系统的时间
          name: '',
          type: 0, //呼叫器类型 0普通呼叫器。1 NB呼叫器
          keyMap: '', //  按键定义
          gateways: [], //  登记该呼叫器接收到消息的网关
          limitGateways: [], //  默认情况下会接收所有消息,可以指定仅仅接收来自该呼叫器的呼叫消息
          cardID: ['1'], // 呼叫器绑定的卡片ID
          memo: '', //呼叫器备注
          selected: false, //
          priority: 0, //呼叫器的优先级
        },
      },
      callerServices: [
        {
          serviceId: 1,
          callerSN: 'sn1',
          key: 8,
          keyMap: {
            1: {name: '取消', behavior: 1, color: 'blue', params: {}},
            2: {name: '结账', behavior: 0, color: 'red', params: {}},
            4: {name: '下单', behavior: 0, color: 'orange', params: {}},
            8: {name: '呼叫', behavior: 0, color: '#32CD32', params: {}},
          },
          timeText: '几秒内',
          tagName: '呼叫',
        },
        {
          serviceId: 2,
          callerSN: 'sn2',
          key: 2,
          keyMap: {
            1: {name: '取消', behavior: 1, color: 'blue', params: {}},
            2: {name: '结账', behavior: 0, color: 'red', params: {}},
            4: {name: '下单', behavior: 0, color: 'orange', params: {}},
            8: {name: '呼叫', behavior: 0, color: '#32CD32', params: {}},
          },
          timeText: '2分钟内',
          tagName: '结账',
        },
      ],
    };
  }
  static mapStateToProps = (state, ownProps) => {
    return {};
  };
  static mapDispatchToProps = (dispatch, ownProps) => {
    return {
      updateMy: data => dispatch(updateMySuccess(data)),
    };
  };
  componentDidMount() {}
  onHeaderClick(type) {}

  onchangeNum(num) {
    this.setState({num: num});
  }
  toggleMenu = () => {
    this.refs.menu.toggle();
  };
  onAreaChange(id) {
    console.log(id);
  }
  waitUpdateCallService(caller) {
    console.log('caller is:', caller);
  }
  openDrawer(type, message) {
    this.setState({type});
    this.refs.modal.onOpen();
    if (message) {
      this.refs.modal.setMessage(message);
    } else {
      this.refs.modal.setCallerServices(this.state.callerServices);
    }
  }
  pressIcon(iconName) {
    console.log(iconName);
  }
  render() {
    return (
      <View style={{backgroundColor: '#fff'}}>
        {/* 公共头部 */}
        <Button
          type="primary"
          onPress={() => {
            i18n.locale = 'en-US';
          }}>
          en-US
        </Button>
        <Test count={this.state.count}></Test>
        <Button
          type="primary"
          onPress={() => this.setState({count: this.state.count + 1})}>
          +1
        </Button>
        <Button
          type="primary"
          onPress={() => this.props.updateMy({theme: 'red'})}>
          red
        </Button>
        <Text>{_t('common.failed')}</Text>
        <Header
          style={this.headerStyle}
          title="无线管理主机"
          centerComponents={this.headerCenterComponents}
          rightComponents={this.headerRightComponents}
        />
        {/* 首页内容 */}
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 3, paddingRight: 10, paddingTop: 10}}>
            <Menu
              ref="menu"
              navigation={this.props.navigation}
              current={this.state.curentArea}
              menu={this.state.area}
              onAreaChange={id => {
                this.onAreaChange(id);
              }}
            />
            {/* 操作栏 */}
            <Toolbar
              num={this.state.num}
              curentArea={this.state.curentArea}
              area={this.state.area}
              onchangeNum={num => this.onchangeNum(num)}
              toggleMenu={() => this.toggleMenu()}
            />
            {/* 卡片 */}
            <CardListWithoutData
              num={this.state.num}
              openDrawer={type => this.openDrawer(type)}
            />
            <BottomTab />
            <BottomDrawer
              callers={this.state.callers}
              ref="modal"
              type={this.state.type}
              waitUpdateCallService={caller => {
                this.waitUpdateCallService(caller);
              }}
            />
          </View>
          {/* 实时操作 */}
          <Operations
            openDrawer={(type, message) => this.openDrawer(type, message)}
            waitUpdateCallService={caller => {
              this.waitUpdateCallService(caller);
            }}
          />
        </View>
      </View>
    );
  }
}
