import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../../components/common/Header';
import AuthBackground from '../../components/auth/AuthBackground';
import {colors} from '../../helper/utils';
import {hp} from '../../helper/constants';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <AuthBackground containerStyle={styles.bgStyle1} />
      <AuthBackground containerStyle={styles.bgStyle2} />
      <AuthBackground containerStyle={styles.bgStyle3} />
      <Header headerText={'Welcome'} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.loginBgLight,
  },
  bgStyle1: {
    left: 0,
    top: 0,
  },
  bgStyle2: {
    bottom: hp(12),
  },
  bgStyle3: {
    right: 0,
    bottom: 0,
  },
});
