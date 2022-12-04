import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  updateButton: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  updateText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
