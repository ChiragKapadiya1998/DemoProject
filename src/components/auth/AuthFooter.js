import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../helper/utils';
import {fontSize, hp, wp} from '../../helper/constants';

const AuthFooter = ({text, onPress, containerStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.forgotPass}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthFooter;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  forgotPass: {
    color: colors.loginText,
    marginTop: hp(0.7),
    fontSize: fontSize(14),
  },
});
