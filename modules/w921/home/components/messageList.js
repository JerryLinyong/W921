import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import Button from '@components/button';
import {Steps} from '@ant-design/react-native';
const Step = Steps.Step;

const styles = StyleSheet.create({
  messageList: {
    marginHorizontal: _reactW(10),
    marginVertical: _reactH(10),
    backgroundColor: 'blue',
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'red',
  },
  messageText: {
    flex: 1,
    fontSize: _reactT(30),
  },
  tagItem: {
    height: _reactH(50),
    width: _reactW(30),
    borderRadius: _reactT(10),
    justifyContent: 'center',
  },
  tagText: {
    fontWeight: 'bold',
    fontSize: _reactT(25),
    textAlign: 'center',
  },
});

/* 单条消息*/
function Message(props) {
  return (
    <View style={{backgroundColor: 'yellow'}}>
      <Steps
        style={{width: '100%', backgroundColor: 'red'}}
        size="small"
        current={-1}
        direction="vertical">
        <Step
          key={props.id}
          title={
            <TouchableWithoutFeedback
              onPress={() =>
                props.onPress('message', {
                  serviceId: props.serviceId,
                  callerSN: props.callerSN,
                  tagName: props.tagName,
                })
              }>
              <View style={styles.messageItem}>
                <Text style={styles.messageText}>{props.name}</Text>
                <View style={[styles.tagItem, {backgroundColor: props.color}]}>
                  <Text style={styles.tagText}>{props.callType} </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          }
          description={<Text>{props.time}</Text>}
        />
      </Steps>
    </View>
  );
}

const data = [
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
];
export default function Operations(props) {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        windowSize={200}
        onEndReachedThreshold="0.4"
        style={styles.messageList}
        // onEndReached={() => this.loadMore()}
        ListFooterComponent={<View style={{height: _reactH(60)}}></View>}
        renderItem={({item}) => (
          <Message
            name={item.name}
            callType={item.callType}
            color={item.color}
            time={item.time}
            openDrawer={props.openDrawer}
          />
        )}
      />

      <Button>gahga</Button>
      <Button>gahga</Button>
      <Button>gahga</Button>
      <Button>gahga</Button>
    </View>
  );
}
