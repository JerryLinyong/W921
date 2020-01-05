// 用于加载用户数据,加载完毕后进入主页面
// 如果app未选择,则进行选择,否则直接进入
import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {updateMySuccess} from '@store/my/actions';
import {loadPages} from '@store/pages/actions';
import {Button} from '@ant-design/react-native';

class initScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.loadApp(props.app);
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
  // 加载app页面
  loadApp(app) {
    if (!app) return;
    if (app !== this.props.app) {
      this.props.updateMy({app});
    }
    // 根据app加载相应页面
    this.props.loadPages();
  }
  render() {
    return (
      <View>
        <View style={{height: 30}}></View>
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
    isPageLoaded: state.pages.get('loaded').get('load'),
    app: state.my.get('app'),
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
