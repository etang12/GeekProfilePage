import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    borderBottomWidth: 1,
    borderColor: '#b2b3b3',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginBottom: 10,
    padding: 5,
  },
  rowTitle: {
    fontWeight: 'bold',
    color: '#b2b3b3',
  },
  rowContent: {
    fontWeight: 'bold',
    color: 'black',
    flexWrap: 'wrap',
    width: 300,
    marginVertical: 5,
  },
  rowIcon: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
    color: '#b2b3b3',
  },
});

export default styles;
