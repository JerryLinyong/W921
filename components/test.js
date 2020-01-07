import React from 'react';
import {Text, View, TouchableWithoutFeedback, ScrollView} from 'react-native';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
    color: 'white',
  },
});

class AskForAddCardModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps.count, this.props.count);
    if (nextProps.count !== nextState.count) {
      this.setState({count: nextProps.count});
      return false;
    }
    return true;
  }
  render() {
    console.log('gaga');
    return (
      <View>
        <Text>{this.props.count}</Text>
        <Text>{this.state.count}</Text>
      </View>
    );
  }
}
export default AskForAddCardModal;
