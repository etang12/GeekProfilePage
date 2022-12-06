import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'column',
    marginHorizontal: 40,
    marginTop: 30,
    height: '100%',
  },
  textInput: {
    fontWeight: 'bold',
    fontSize: 17,
    marginHorizontal: 5,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 40,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    height: 200,
  },
  updateButton: {
    position: 'absolute',
    width: '100%',
    bottom: 350,
  },
});

export default styles;
