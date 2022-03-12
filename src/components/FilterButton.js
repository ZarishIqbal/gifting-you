import React from 'react';
import {StyleSheet} from 'react-native';
import Ripple from 'react-native-material-ripple';
import colors from '../config/colors';
import AppText from './AppText';

function FilterButton({
  disabled = false,
  onPress,
  enTitle,
  ptTitle,
  outlined = false,

  ...otherProps
}) {
  return (
    <Ripple
      onPress={onPress}
      style={
        disabled
          ? outlined
            ? styles.disabledOut
            : styles.disabled
          : outlined
          ? styles.outlined
          : styles.solid
      }>
      <AppText
        en={enTitle}
        pt={ptTitle}
        style={
          disabled
            ? outlined
              ? styles.textDisOut
              : styles.textDis
            : outlined
            ? styles.textOut
            : styles.textSol
        }
      />
    </Ripple>
  );
}
const styles = StyleSheet.create({
  outlined: {
    width: '40%',
    height: 50,
    backgroundColor: colors.lightgreen,
    borderColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderRadius: 10,
  },
  solid: {
    width: '40%',
    height: 50,
    backgroundColor: colors.lightgreen,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 10,
  },
  disabled: {
    width: '40%',
    height: 50,
    backgroundColor: colors.diabled,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 10,
  },
  disabledOut: {
    width: '40%',
    height: 50,
    borderColor: colors.green,
    backgroundColor: colors.diabled,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderRadius: 10,
  },
  textOut: {color: colors.green, fontWeight: 'bold'},
  textSol: {color: colors.green, fontWeight: 'bold'},
  textDis: {color: colors.green, fontWeight: 'bold'},
  textDisOut: {color: colors.green, fontWeight: 'bold'},
});
export default FilterButton;
