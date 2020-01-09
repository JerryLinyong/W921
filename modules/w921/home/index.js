import React, {useRef, useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MenuBar from '@components/menuBar';
import MessageList from './components/messageList';

const styles = StyleSheet.create({
  main: {flexDirection: 'row'},
  cardBox: {flex: 3, borderRightWidth: 0.1},
  msgBox: {flex: 1},
});

// 获得头部menu的参数
function getHeaderMenu(props) {
  const backgroundColor = props.theme.get('primary');
  const color = props.theme.get('primaryText');
  return {
    style: {
      backgroundColor,
    },
    leftComponents: [
      {type: 'title', params: {title: props.myTitle}, style: {color}},
    ],
    centerComponents: [{type: 'clock', style: {color}}],
    rightComponents: [
      'home',
      'email',
      'chart-pie',
      'laptop',
      'settings-outline',
    ].map(name => {
      return {
        type: 'icon',
        params: {name, color},
        onPress: () => {
          console.log(name);
        },
      };
    }),
  };
}

// 获得卡片menu的参数
function getCardMenu(props) {
  const backgroundColor = props.theme.get('basic');
  const color = props.theme.get('basicText');
  return {
    style: {
      backgroundColor,
      height: _reactH(100),
    },
    leftComponents: [
      {
        type: 'title',
        params: {title: props.myTitle},
        style: {color, fontSize: _reactT(40)},
      },
    ],
    rightComponents: ['border-all-variant', 'view-grid', 'apps'].map(name => {
      return {
        type: 'icon',
        params: {name, color: props.theme.get('primary'), size: _reactT(50)},
        onPress: () => {
          console.log(name);
        },
      };
    }),
  };
}

// 获得消息menu的参数
function getMsgdMenu(props) {
  const backgroundColor = props.theme.get('basic');
  const color = props.theme.get('basicText');
  return {
    style: {
      backgroundColor,
      height: _reactH(100),
    },
    leftComponents: [
      {
        type: 'title',
        params: {title: _t('common.real_time_operation')},
        style: {color, fontSize: _reactT(40)},
      },
    ],
  };
}
export default function HomeScreen(props) {
  // 设置头部menu
  const [headerMenu, setHeaderMenu] = useState({});
  useEffect(() => {
    setHeaderMenu(getHeaderMenu(props));
  }, [props.myTitle]);
  // 设置卡片menu
  const [cardMenu, setCardMenu] = useState({});
  useEffect(() => {
    setCardMenu(getCardMenu(props));
  }, [props.myTitle]);
  // 设置消息menu
  const [msgMenu, setMsgMenu] = useState({});
  useEffect(() => {
    setMsgMenu(getMsgdMenu(props));
  }, []);
  return (
    <View>
      <MenuBar {...headerMenu} />
      <View style={styles.main}>
        <View style={styles.cardBox}>
          <MenuBar {...cardMenu} />
        </View>
        <View style={styles.msgBox}>
          <MenuBar {...msgMenu} />
          <MessageList />
        </View>
      </View>
    </View>
  );
}

HomeScreen.mapStateToProps = (state, ownProps) => {
  return {
    myTitle: state.my.get('title'), // app名称
  };
};
HomeScreen.mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateMy: data => dispatch(updateMySuccess(data)),
  };
};
