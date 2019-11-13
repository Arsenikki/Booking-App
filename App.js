import React, {useState, useReducer} from 'react';
import {View, Text, Alert, Button} from 'react-native';
import styles from './visuals/styles';
import ShowConfigButtons from './components/ConfigButton';
import ShowBookingButtons from './components/BookingButton';

export default function App() {
  const allThings = ['Sauna', 'laundry'];
  const [showInitial, setShowInitial] = useState(true);
  const [showButtons, setShowButtons] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [selectedThings, setSelectedThings] = useReducer(
    (bookableThingsArray, {type, value}) => {
      switch (type) {
        case 'add':
          return [...bookableThingsArray, value];
        case 'remove':
          var arr = bookableThingsArray.filter(item => item !== value);
          return arr;
        default:
          return bookableThingsArray;
      }
    },
    [],
  );

  const handleSelectionPress = input => {
    if (selectedThings.includes(input)) {
      setSelectedThings({type: 'remove', value: input});
    } else {
      setSelectedThings({type: 'add', value: input});
    }
  };

  const handleConfigPress = () => {
    setShowConfig(!showConfig);
    setShowInitial(false);
  };

  // Works on both iOS and Android
  const alertti = () => {
    Alert.alert(
      'No configuration found!',
      'Start by creating a configuration.',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  };

  function InitialPage() {
    alertti();
    return (
      <View style={styles.middleBox}>
        <Text>CONFIGURATION IS NEEDED!</Text>
      </View>
    );
  }

  const getButtonTitle = () => {
    if (showConfig) {
      return 'Booking';
    } else {
      return 'Configuration';
    }
  };

  return (
    <React.Fragment>
      <View style={styles.topBox}>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Text style={{fontSize: 30, alignSelf: 'center'}}>
            online booking
          </Text>
          <Button
            title={getButtonTitle()}
            onPress={() => handleConfigPress()}
          />
        </View>
      </View>

      <View style={styles.middleBox}>
        {showInitial ? (
          <InitialPage />
        ) : showConfig ? (
          allThings.map((thing, index) => (
            <ShowConfigButtons
              key={index}
              title={thing}
              handleConfigPress={handleSelectionPress}
            />
          ))
        ) : (
          selectedThings.map((thing, index) => (
            <ShowBookingButtons key={index} title={thing} />
          ))
        )}
      </View>
    </React.Fragment>
  );
}
