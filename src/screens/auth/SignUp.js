import {KeyboardAvoidingView, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../helper/utils';
import InputText from '../../components/common/InputText';
import {hp} from '../../helper/constants';
import AuthHeader from '../../components/auth/AuthHeader';
import Button from '../../components/common/Button';
import AuthBackground from '../../components/auth/AuthBackground';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      style={styles.container}>
      <SafeAreaView />
      <AuthHeader headerName={'SIGNUP!'} />
      <AuthBackground containerStyle={styles.bgStyle1} />
      <AuthBackground containerStyle={styles.bgStyle2} />
      <AuthBackground containerStyle={styles.bgStyle3} />
      <InputText
        lable={'Enter Username'}
        value={userName}
        onChangeText={name => setUserName(name)}
        containerStyle={styles.userNameStyle}
      />
      <InputText
        lable={'Your Email Address'}
        value={email}
        onChangeText={email => setEmail(email)}
        containerStyle={styles.emailStyle}
      />
      <InputText
        lable={'Password'}
        value={password}
        onChangeText={pass => setPassword(pass)}
        containerStyle={styles.passwordStyle}
      />
      <InputText
        lable={'Confirm Password'}
        value={confirmPass}
        onChangeText={cpass => setConfirmPass(cpass)}
        containerStyle={styles.confirmPassStyle}
      />
      <Button btnName={'SIGNUP'} containerStyle={styles.buttonStyle} />
      <SafeAreaView />
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.loginBgLight,
    justifyContent: 'center',
  },
  bgStyle1: {
    right: 0,
    top: 0,
  },
  bgStyle2: {
    right: 0,
    bottom: hp(12),
  },
  bgStyle3: {
    bottom: 0,
  },
  userNameStyle: {
    marginTop: hp(3),
  },
  emailStyle: {
    marginTop: hp(3),
  },
  passwordStyle: {
    marginTop: hp(3),
  },
  confirmPassStyle: {
    marginTop: hp(3),
  },
  buttonStyle: {
    marginTop: hp(13),
  },
});
