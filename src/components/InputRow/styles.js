import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginBottom: 10,
    padding: 5,
  },
  rowText: {},
  rowIcon: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
});

export default styles;
