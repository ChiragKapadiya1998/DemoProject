import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, KeyboardAvoidingView} from 'react-native';

import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import AuthBackground from '../../components/auth/AuthBackground';
import AuthHeader from '../../components/auth/AuthHeader';
import AuthFooter from '../../components/auth/AuthFooter';
import InputText from '../../components/common/InputText';
import Button from '../../components/common/Button';
import {strings} from '../../helper/strings';
import {hp} from '../../helper/constants';
import {colors} from '../../helper/utils';
import {getDataRequest} from '../../action/dataAction';

const Login = ({}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isHidePass, setIsHidePass] = useState(true);

  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const onChangeUserName = name => setUserName(name);
  const onChangePassword = pass => setPassword(pass);
  const onIconPress = () => setIsHidePass(!isHidePass);
  const onLoginPress = () => navigate('HomeScreen');
  const onCreateNewPress = () => navigate('SignUp');

  const getUserData = () => {
    const request = {
      onSuccess: response => console.log('on success', response),
      onFail: response => console.log('on fail response', response),
    };
    dispatch(getDataRequest(request));
  };

  useEffect(() => {
    // getUserData();
  }, []);

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
        label={'Username'}
        value={userName}
        onChangeText={onChangeUserName}
        containerStyle={styles.userNameStyle}
      />
      <InputText
        label={'Password'}
        value={password}
        onChangeText={onChangePassword}
        containerStyle={styles.passwordStyle}
        secureTextEntry={isHidePass ? true : false}
        onIconPress={onIconPress}
        inputType={'password'}
      />
      <Button
        btnName={'LOGIN'}
        containerStyle={styles.buttonStyle}
        onPress={onLoginPress}
      />
      <AuthFooter
        text={strings.forgotPass}
        containerStyle={styles.footerStyle}
      />
      <AuthFooter text={strings.createNew} onPress={onCreateNewPress} />
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
