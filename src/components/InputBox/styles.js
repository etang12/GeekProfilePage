import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
  },
  inputBox: {
    flexDirection: 'column',
    width: 155,
    height: 65,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  text: {
    marginLeft: 10,
  },
  textLabel: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },
  textInput: {
    height: 45,
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 15,
    padding: 0,
    margin: 0,
  },
});

export default styles;
