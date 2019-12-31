import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class initScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('Main');
    }, 5000);
  }
  render() {
    return (
      <View>
        <Text>初始页面</Text>
      </View>
    );
  }
}
