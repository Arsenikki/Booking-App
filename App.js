import React, {useState, useReducer} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {Button} from 'react-native-elements';

export default function App() {
  const allThings = ['Sauna', 'laundry'];
  const [showButtons, setShowButtons] = useState(false);
  const [selectedThings, setSelectedThings] = useReducer(
    (bookableThingsArray, {type, value}) => {
      switch (type) {
        case 'add':
          return [...bookableThingsArray, value];
        case 'remove':
          var arr = bookableThingsArray.filter(item => item !== value);
          console.log('arrr', arr);
          return arr;
        default:
          return bookableThingsArray;
      }
    },
    [],
  );

  const styles = StyleSheet.create({
    alternativeLayoutButtonContainer: {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    topBox: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      backgroundColor: 'dimgrey',
    },
    middleBox: {
      flex: 7,
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      backgroundColor: 'skyblue',
      alignItems: 'center',
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 100,
      marginHorizontal: 20,
    },
  });

  const handleOpenConfig = () => {
    setShowButtons(!showButtons);
  };

  const handleConfigPress = input => {
    if (selectedThings.includes(input)) {
      setSelectedThings({type: 'remove', value: input});
    } else {
      setSelectedThings({type: 'add', value: input});
    }
  };

  function ShowBookingButtons(props) {
    return (
      <View style={styles.middleBox}>
        <TouchableOpacity
          onPress={() => alert(`You pressed ${props.title} button`)}
          style={styles.button}>
          <Text> {props.title} </Text>
        </TouchableOpacity>
      </View>
    );
  }

  function ShowConfigButtons(props) {
    console.log('jajajaja', props);
    return (
      <View style={styles.middleBox}>
        <TouchableOpacity
          onPress={() => handleConfigPress(props.title)}
          style={styles.button}>
          <Text> {props.title} </Text>
        </TouchableOpacity>
      </View>
    );
  }

  const showInitialPage = () => {
    alert(
      'You need to create initial configuration to proceed. Open configuration settings from top right corner.',
    );
    return <View style={styles.middleBox} />;
  };

  return (
    <React.Fragment>
      <View style={styles.topBox}>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Text style={{fontSize: 30, alignSelf: 'center'}}>
            online booking
          </Text>
          <Button title="Configuration" onPress={() => handleOpenConfig()} />
        </View>
      </View>
      <View style={styles.middleBox}>
        {showButtons
          ? selectedThings.map((thing, index) => (
              <ShowBookingButtons key={index} title={thing} />
            ))
          : allThings.map((thing, index) => (
              <ShowConfigButtons key={index} title={thing} />
            ))}
      </View>
    </React.Fragment>
  );
}
