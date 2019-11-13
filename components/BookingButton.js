import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../visuals/styles';

export default function ShowBookingButtons({title}) {
  const handleBookingButtonPress = () => {
    console.log('pressed:', title);
  };

  return (
    <View style={styles.middleBox}>
      <TouchableOpacity
        onPress={() => handleBookingButtonPress()}
        style={styles.button}>
        <Text> {title} </Text>
      </TouchableOpacity>
    </View>
  );
}
