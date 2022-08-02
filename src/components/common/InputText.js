import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';

import {wp} from '../../helper/constants';
import {colors} from '../../helper/utils';
import {icons} from '../../helper/utils';

const InputText = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
  containerStyle,
  inputType,
  onIconPress,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        label={label}
        underlineColor={colors.black}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize={'none'}
        autoCorrect={false}
        style={[styles.inputText, containerStyle]}
      />
      {inputType === 'password' ? (
        <TouchableOpacity style={styles.iconWrapper} onPress={onIconPress}>
          <Image
            source={!secureTextEntry ? icons.eye : icons.hidden}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  inputText: {
    flex: 1,
    backgroundColor: colors.transparent,
    marginHorizontal: wp(7),
  },
  iconWrapper: {
    justifyContent: 'center',
    position: 'absolute',
    right: 36,
    bottom: 20,
  },
  iconStyle: {
    height: 24,
    width: 24,
  },
});
