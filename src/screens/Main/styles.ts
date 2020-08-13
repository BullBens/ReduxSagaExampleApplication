import {StyleSheet, Dimensions} from 'react-native';
import {top, colors, sizes} from '@constants';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.black_087,
  },
  incrementOrDecrementView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnStyle: {
    padding: 16,
  },
  btnText: {
    fontSize: 20,
    color: colors.white_FFFFFF,
  },
  value: {
    fontSize: 20,
    color: colors.white_FFFFFF,
  },
  scrollViewUsers: {
    // alignItems: 'center',
    height: 100,
    width: '100%',
  },
});
