import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {fontSize, hp, wp} from '../../helper/constants';
import {colors} from '../../helper/utils';

const Header = ({headerText}) => {
  return <Text style={styles.textStyle}>{headerText}</Text>;
};

export default Header;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: fontSize(27),
    color: colors.black,
    textAlign: 'center',
    fontWeight: '500',
  },
});
