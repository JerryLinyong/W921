// 出现错误时,显示的页面
import React from 'react';
import {Text, View} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>错误</Text>
      </View>
    );
  }
}
