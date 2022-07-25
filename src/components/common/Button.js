import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../helper/utils';
import {fontSize, hp, wp} from '../../helper/constants';

const Button = ({btnName, containerStyle, onPress}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
        <Text style={styles.btnNameStyle}>{btnName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(45),
    height: hp(6),
    borderRadius: 30,
  },
  btnNameStyle: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSize(19),
  },
});
