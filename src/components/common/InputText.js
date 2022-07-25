import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {hp, wp} from '../../helper/constants';
import {colors} from '../../helper/utils';

const InputText = ({
  lable,
  value,
  onChangeText,
  secureTextEntry,
  containerStyle,
}) => {
  return (
    <TextInput
      label={lable}
      underlineColor={colors.black}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
      autoCapitalize={'none'}
      autoCorrect={false}
      style={[styles.inputText, containerStyle]}
    />
  );
};

export default InputText;

const styles = StyleSheet.create({
  inputText: {
    marginHorizontal: wp(7),
    backgroundColor: 'rgba(0,0,0,0)',
  },
});
