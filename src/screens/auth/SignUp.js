import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {colors} from '../../helper/utils';
import {fontSize, hp} from '../../helper/constants';
import {strings} from '../../helper/strings';
import Button from '../../components/common/Button';
import AuthError from '../../components/auth/AuthError';
import InputText from '../../components/common/InputText';
import AuthHeader from '../../components/auth/AuthHeader';
import AuthBackground from '../../components/auth/AuthBackground';

const SignUp = ({}) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [hideCPass, setHideCPass] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [cPassError, setCPassError] = useState(false);

  const {navigate} = useNavigation();

  const onUserInput = name => setUserName(name);

  const onIconPress = () => setHidePass(!hidePass);
  const onIconCPress = () => setHideCPass(!hideCPass);
  const onSignUpPress = () => navigate('HomeScreen');
  const onHaveAccountPress = () => navigate('Login');

  const emailValidation = mail => {
    setEmail(mail);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(mail) !== false || mail === '') {
      setEmailError(false);
      return 0;
    } else {
      setEmailError(true);
    }
  };

  const passwordValidation = pass => {
    setPassword(pass);
    let reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (reg.test(pass) !== false || pass === '') {
      setPassError(false);
      return 0;
    } else {
      setPassError(true);
    }
  };

  const confirmValidation = cPass => {
    setConfirmPass(cPass);
    if (password === cPass || cPass === '') {
      setCPassError(false);
    } else {
      setCPassError(true);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <AuthBackground containerStyle={styles.bgStyle1} />
      <AuthBackground containerStyle={styles.bgStyle2} />
      <AuthBackground containerStyle={styles.bgStyle3} />
      <AuthHeader headerName={'SIGN UP!'} />
      <KeyboardAwareScrollView>
        <InputText
          label={'Enter Username'}
          value={userName}
          onChangeText={onUserInput}
          containerStyle={styles.userNameStyle}
        />
        <InputText
          label={'Your Email Address'}
          value={email}
          onChangeText={emailValidation}
          containerStyle={styles.emailStyle}
        />
        {emailError && <AuthError errMsg={strings.emailErr} />}

        <InputText
          label={'Password'}
          value={password}
          onChangeText={passwordValidation}
          containerStyle={styles.passwordStyle}
          secureTextEntry={hidePass ? true : false}
          onIconPress={onIconPress}
          inputType={'password'}
        />
        {passError && <AuthError errMsg={strings.passErr} />}
        <InputText
          label={'Confirm Password'}
          value={confirmPass}
          onChangeText={confirmValidation}
          containerStyle={styles.confirmPassStyle}
          secureTextEntry={hideCPass ? true : false}
          onIconPress={onIconCPress}
          inputType={'password'}
        />
        {cPassError && <AuthError errMsg={strings.confirmPassErr} />}
        <Button
          btnName={'SIGN UP'}
          containerStyle={styles.buttonStyle}
          onPress={onSignUpPress}
        />
        <TouchableOpacity onPress={onHaveAccountPress}>
          <Text style={styles.footerText}>Already Have a Account!</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
      <SafeAreaView />
    </View>
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
    marginTop: hp(2),
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
    marginTop: hp(10),
  },
  textStyle: {
    marginHorizontal: hp(3),
    marginTop: hp(1),
    color: colors.red,
    fontWeight: '500',
  },
  footerText: {
    textAlign: 'center',
    color: colors.loginText,
    marginTop: hp(2),
    fontSize: fontSize(14),
  },
});
