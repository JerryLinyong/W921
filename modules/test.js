import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {updateMySuccess} from '@store/my/actions';

export default class TestScreen extends React.Component {
  static mapStateToProps = (state, ownProps) => {
    return {
      theme: state.my.get('theme'), // 主题
    };
  };
  static mapDispatchToProps = (dispatch, ownProps) => {
    return {
      updateMy: data => dispatch(updateMySuccess(data)),
    };
  };
  componentDidMount() {
    setTimeout(() => {
      this.props.updateMy({theme: 'gaga'});
    }, 3000);
  }
  onHeaderClick(type) {
    console.log(type, this.props.theme);
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>w921</Text>
        <Icon name="facebook" />
        <Icon.Button name="facebook" backgroundColor="#3b5998"></Icon.Button>
      </View>
    );
  }
}
