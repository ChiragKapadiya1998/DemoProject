import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {colors} from '../../helper/utils';
import {hp} from '../../helper/constants';

const AuthError = ({errMsg}) => {
  return <Text style={styles.textStyle}>{` # ${errMsg}`}</Text>;
};

export default AuthError;

const styles = StyleSheet.create({
  textStyle: {
    color: colors.red,
    marginLeft: hp(3),
    marginTop: hp(0.3),
  },
});
