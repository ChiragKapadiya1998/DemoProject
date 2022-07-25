import {SafeAreaView, StyleSheet, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import AuthHeader from '../../components/auth/AuthHeader';
import InputText from '../../components/common/InputText';
import {hp} from '../../helper/constants';
import Button from '../../components/common/Button';
import AuthFooter from '../../components/auth/AuthFooter';
import AuthBackground from '../../components/auth/AuthBackground';
import {colors} from '../../helper/utils';

const Login = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : ''}>
      <AuthBackground containerStyle={styles.bgStyle1} />
      <AuthBackground containerStyle={styles.bgStyle2} />
      <AuthBackground containerStyle={styles.bgStyle3} />
      <SafeAreaView />
      <AuthHeader headerName={'LOGIN!'} />
      <InputText
        lable={'Username'}
        value={userName}
        onChangeText={name => setUserName(name)}
        containerStyle={styles.userNameStyle}
      />
      <InputText
        lable={'Password'}
        value={password}
        onChangeText={pass => setPassword(pass)}
        containerStyle={styles.passwordStyle}
        secureTextEntry={true}
      />
      <Button btnName={'LOGIN'} containerStyle={styles.buttonStyle} />
      <AuthFooter
        text={'Forgot Password?'}
        containerStyle={styles.footerStyle}
      />
      <AuthFooter
        text={'OR Create a New Account!'}
        onPress={() => navigation.navigate('SignUp')}
      />
      <SafeAreaView />
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.loginBgLight,
    justifyContent: 'center',
  },
  bgStyle1: {
    left: 0,
    top: 0,
  },
  bgStyle2: {
    bottom: 0,
    bottom: hp(12),
  },
  bgStyle3: {
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userNameStyle: {
    marginTop: hp(3),
  },
  passwordStyle: {
    marginTop: hp(3),
  },
  buttonStyle: {
    marginTop: hp(13),
  },
  footerStyle: {
    marginTop: hp(2),
  },
});
