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
    color: 'black',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 40,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#e5e5e5',
    height: 200,
  },
  updateButton: {
    position: 'absolute',
    width: '100%',
    bottom: 350,
  },
});

export default styles;
