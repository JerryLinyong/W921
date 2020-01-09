/**
 *  title组件
 *  props
 *    style: {} // 字体通用样式
 *    title: '' // 主标题
 *    subTitle: '' // 次标题
 */
import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  tabs: {
    width: '100%',
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scaleSizeH(6),
  },
  text: {
    fontSize: setSpText(30),
  },
});

function TabBar(props) {
  const [routes, setRoutes] = useState([]);
  useEffect(() => {
    const routes = props.pages.toJS().map((route, index) => {
      const color =
        props.navigationState.index === index
          ? props.theme.get('primary')
          : props.theme.get('basicText');
      return (
        <TouchableWithoutFeedback
          key={route.name}
          onPress={() => props.jumpTo(route.name)}>
          <View
            style={[styles.tab, {backgroundColor: props.theme.get('basic')}]}>
            <Icon
              size={setSpText(50)}
              name={route.icon || 'help'}
              color={color}
            />
            {route.label ? (
              <Text style={[styles.text, {color}]}>{route.label}</Text>
            ) : null}
          </View>
        </TouchableWithoutFeedback>
      );
    });
    setRoutes(routes);
  }, [props.navigationState.index, props.theme, props.pages]);
  return <View style={styles.tabs}>{routes}</View>;
}
const mapStateToProps = (state, ownProps) => {
  return {
    theme: state.theme,
    pages: state.pages.get('pages'),
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(TabBar);
