// 用于加载用户数据,加载完毕后进入主页面
// 如果app未选择,则进行选择,否则直接进入
import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {updateMySuccess} from '@store/my/actions';
import {loadPages} from '@store/pages/actions';
import {Button, ActivityIndicator, Toast} from '@ant-design/react-native';

class initScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loadingPage: false};
    this.loadApp(props.app);
  }
  // 当props值变化时,可以通过return值映射到state上
  static getDerivedStateFromProps(nextProps, prevState) {
    return null;
  }
  // 加载app页面
  loadApp(app) {
    if (!app) return;
    if (app !== this.props.app) {
      this.props.updateMySuccess({app});
    }
    // 根据app加载相应页面
    this.setState({loadingPage: true});
    this.props.loadPages({callBack: this.callBack.bind(this)});
  }
  callBack(res) {
    // 跳转到其他页面则不做处理
    if (!this.props.navigation.isFocused()) return;
    const {payload, status, message} = res;
    // 加载页面成功,进行跳转
    this.setState({loadingPage: false});
    if (status === 'success') {
      this.props.navigation.replace('Main');
    } else {
      Toast.fail(_t('common.failed'), 3, null, false);
    }
  }
  render() {
    return (
      <View>
        <ActivityIndicator
          toast
          animating={this.state.loadingPage}
          text={this.props.app}
        />
        <View style={{height: scaleSizeH(30)}}></View>
        <Button type="primary" onPress={this.loadApp.bind(this, 'w921')}>
          w921
        </Button>
        <View style={{height: 30}}></View>
        <Button type="primary" onPress={this.loadApp.bind(this, 'voerkaMsg')}>
          voerkaMsg
        </Button>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    app: state.my.get('app'),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateMySuccess: data => dispatch(updateMySuccess(data)),
    loadPages: data => dispatch(loadPages(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(initScreen);