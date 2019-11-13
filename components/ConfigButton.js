import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../visuals/styles';

export default function ShowConfigButtons({title, handleConfigPress}) {
  const [buttonActive, setButtonActive] = useState(false);

  return (
    <View style={styles.middleBox}>
      <Text>CONFIG</Text>
      <TouchableOpacity
        style={buttonActive ? styles.buttonActive : styles.button}
        onPress={() => {
          setButtonActive(!buttonActive);
          handleConfigPress(title);
        }}>
        <Text> {title} </Text>
      </TouchableOpacity>
    </View>
  );
}
