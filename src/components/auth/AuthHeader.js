import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../helper/utils';
import {fontSize, hp, wp} from '../../helper/constants';

const AuthHeader = ({headerName}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{headerName}</Text>
      <Text style={styles.text}>Enter Your Username & Password Here</Text>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  container: {
    marginLeft: wp(7),
    marginTop: hp(6),
  },
  headerText: {
    marginTop: hp(6),
    color: colors.black,
    fontSize: fontSize(36),
    fontWeight: '500',
  },
  text: {
    fontSize: fontSize(15),
    marginTop: hp(1),
    color: colors.loginText,
    fontWeight: '500',
  },
});
