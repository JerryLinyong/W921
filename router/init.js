import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {updateMySuccess} from '@store/my/actions';
import {loadPages} from '@store/pages/actions';
import {getMacAddress} from 'react-native-device-info';

class initScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // getMacAddress().then(macAdress => {
    //   let mac = macAdress.replace(/,/g, '');
    //   props.updateMySuccess({mac});
    // mac地址获取成功,根据mac地址加载页面
    props.loadPages();
    // });
  }
  // 当props值变化时,可以通过return值映射到state上
  static getDerivedStateFromProps(nextProps, prevState) {
    const {error, isPageLoaded} = nextProps;
    // 加载页面错误处理
    if (error) {
    }
    // 加载页面成功,进行跳转
    if (isPageLoaded) {
      nextProps.navigation.replace('Main');
    }
    // 否则，对于state不进行任何操作,否则放回state要修改的值
    return null;
  }
  render() {
    return (
      <View>
        <Text>初始页面</Text>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isPageLoaded: state.pages.get('loaded').get('load'),
    error: state.pages.get('errors').get('load'),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateMy: data => dispatch(updateMySuccess(data)),
    loadPages: data => dispatch(loadPages(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(initScreen);
