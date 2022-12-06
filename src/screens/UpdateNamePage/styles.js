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
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  updateButton: {
    position: 'absolute',
    width: '100%',
    bottom: 350,
  },
});

export default styles;
