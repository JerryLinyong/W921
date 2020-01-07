import React from 'react';
import {Text, View, TouchableWithoutFeedback, ScrollView} from 'react-native';
import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  Provider,
} from '@ant-design/react-native';
import {StyleSheet} from 'react-native';
// import { connect } from 'react-redux'
// import { scaleFontSize, scaleSize, scaleLandScapeSize } from '../utils/screen'
// import ActionButton from 'react-native-action-button';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { updateSettings } from '../store/settings/actions'

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
    color: 'white',
  },
});

class AskForAddCardModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false,
      id: props.current,
    };
  }
  toggle() {
    const menuVisible = !this.state.menuVisible;
    this.setState({menuVisible});
  }
  shouldComponentUpdate(nextProps, nextStates) {
    // if (nextProps.homeDefaultViewStyle !== this.props.homeDefaultViewStyle) {
    //   this.setState({ id: 'all' })
    //   return false
    // }
    if (
      nextStates.menuVisible !== this.state.menuVisible ||
      nextStates.id !== this.state.id
    ) {
      return true;
    }
    return false;
  }
  render() {
    return (
      <Provider>
        <Portal>
          {this.state.menuVisible ? (
            <TouchableWithoutFeedback onPress={() => this.toggle()}>
              <View style={{width: '100%', height: '100%'}}>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  style={{
                    position: 'absolute',
                    top: 70,
                    left: 10,
                    maxHeight: 500,
                    backgroundColor: 'blue',
                  }}>
                  {this.props.menu.map((item, index) => (
                    <TouchableWithoutFeedback
                      key={item.id}
                      onPress={() => {
                        const id = item.id;
                        this.setState({id});
                        this.toggle();
                        this.props.onAreaChange(item.id);
                      }}>
                      <Text
                        style={{
                          backgroundColor:
                            this.state.id == item.id ? '#ddd' : 'white',
                          borderBottomColor: '#ddd',
                          borderBottomWidth: 1,
                          padding: 10,
                          textAlign: 'center',
                          paddingHorizontal: 40,
                          fontSize: 14,
                        }}>
                        {item.name}
                      </Text>
                    </TouchableWithoutFeedback>
                  ))}
                </ScrollView>
              </View>
            </TouchableWithoutFeedback>
          ) : null}
        </Portal>
      </Provider>
    );
  }
}
export default AskForAddCardModal;
