import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontSize} from '../../helper/constants';

const Header = ({headerText}) => {
  return (
    <View>
      <Text style={styles.textStyle}>{headerText}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: fontSize(36),
  },
});
