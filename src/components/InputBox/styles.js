import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  inputBox: {
    flexDirection: 'column',
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
    flexWrap: 'wrap',
  },
});

export default styles;
