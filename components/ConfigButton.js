import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../visuals/styles';

export default function ShowConfigButtons({title, handleConfigPress}) {
  return (
    <View style={styles.middleBox}>
      <Text>CONFIG</Text>
      <TouchableOpacity
        onPress={() => handleConfigPress(title)}
        style={styles.button}>
        <Text> {title} </Text>
      </TouchableOpacity>
    </View>
  );
}
