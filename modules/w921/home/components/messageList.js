import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {Button} from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {scaleSizeW} from '../../../../utils/screen';

const styles = StyleSheet.create({
  button: {
    height: scaleSizeH(80),
    marginHorizontal: scaleSizeW(20),
    marginTop: scaleSizeH(30),
  },
  buttonText: {fontSize: setSpText(30), flex: 1},
});

function Message(props) {
  return (
    <TouchableWithoutFeedback>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginLeft: 20,
          borderLeftWidth: 1,
          borderColor: '#00BFFF',
          position: 'relative',
          paddingTop: 20,
        }}>
        <View
          style={{
            width: scaleSizeW(7),
            height: scaleSizeH(20),
            backgroundColor: 'red',
            borderRadius: 20,
            position: 'absolute',
            left: -7,
          }}
        />
        <View style={{paddingLeft: 10}}>
          <Text
            style={{
              fontSize: setSpText(30),
              color: Color('rgb(74,125,200)').lighten(0.2),
            }}>
            {this.props.name}
          </Text>
          <Text style={{color: Color('rgb(74,125,200)').lighten(0.5)}}>
            {this.props.time}
          </Text>
        </View>
        <View
          style={{
            height: scaleSizeH(50),
            width: scaleSizeW(30),
            backgroundColor: this.props.color,
            borderRadius: 10,
            justifyContent: 'center',
          }}>
          <Text style={styles.tag}>{this.props.callType} </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default function Operations(props) {
  return (
    <View>
      <FlatList
        data={this.props.data}
        keyExtractor={(item, index) => item.id + ''}
        showsVerticalScrollIndicator={false}
        windowSize={200}
        onEndReachedThreshold="0.4"
        style={{borderWidth: 1, borderColor: '#00BFFF', paddingTop: 30}}
        // onEndReached={() => this.loadMore()}
        ListFooterComponent={<View style={{height: scaleSizeH(60)}}></View>}
        renderItem={({item}) => (
          <Message
            name={item.name}
            callType={item.callType}
            color={item.color}
            time={item.time}
            openDrawer={type =>
              this.props.openDrawer(type, {
                serviceId: item.serviceId,
                callerSN: item.callerSN,
                tagName: item.tagName,
              })
            }
          />
        )}
      />
      <Button style={styles.button}>
        <Icon name="check" color="gray" size={setSpText(40)} />
        <Text style={styles.buttonText}>gahga</Text>
      </Button>
      <Button style={styles.button}>
        <Icon name="cancel" color="gray" size={setSpText(40)} />
        <Text style={styles.buttonText}>gahga</Text>
      </Button>
    </View>
  );
}
