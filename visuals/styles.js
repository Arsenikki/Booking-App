import {StyleSheet} from 'react-native';

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
  buttonActive: {
    alignItems: 'center',
    backgroundColor: '#f0f',
    padding: 100,
    marginHorizontal: 20,
  },
});

module.exports = styles;
