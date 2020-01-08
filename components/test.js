import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';

export default function title(props) {
  const [count, setCount] = useState(props.count);
  useEffect(() => {
    console.log(count);
    setCount(pre => pre + 1);
  }, [props.count]);
  return (
    <View>
      <Text>{props.count}</Text>
      <Text>{count}</Text>
    </View>
  );
}
