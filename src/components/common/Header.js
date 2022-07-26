import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {fontSize} from '../../helper/constants';
import {colors} from '../../helper/utils';

const Header = ({headerText}) => {
  return <Text style={styles.textStyle}>{headerText}</Text>;
};

export default Header;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: fontSize(36),
    color: colors.black,
  },
});
