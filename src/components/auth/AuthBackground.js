import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../helper/utils';
import {hp, wp} from '../../helper/constants';

const AuthBackground = ({containerStyle}) => {
  return <View style={[styles.container, containerStyle]} />;
};

export default AuthBackground;

const styles = StyleSheet.create({
  container: {
    height: wp(45),
    width: wp(45),
    backgroundColor: colors.loginBgColor,
    borderRadius: 100,
    position: 'absolute',
  },
});
