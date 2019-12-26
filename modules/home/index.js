import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class HomeScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      theme.update({bodyBorder: 'red'});
      logger.debug('gagag');
    }, 8000);
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
        <Icon name="facebook" />
        <Icon.Button name="facebook" backgroundColor="#3b5998"></Icon.Button>
      </View>
    );
  }
}
