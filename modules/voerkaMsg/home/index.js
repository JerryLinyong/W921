import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {updateMySuccess} from '@store/my/actions';

class HomeScreen extends React.Component {
  componentDidMount() {}
  onHeaderClick(type) {}
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>voerkaMsg</Text>
        <Icon name="facebook" />
        <Icon.Button name="facebook" backgroundColor="#3b5998"></Icon.Button>
      </View>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    theme: state.my.get('theme'), // 主题
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateMy: data => dispatch(updateMySuccess(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
