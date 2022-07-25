import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import HomeScreen from '../screens/dashboard/HomeScreen';
import SignUp from '../screens/auth/SignUp';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen component={Login} name={'Login'} />
      <Stack.Screen component={HomeScreen} name={'HomeScreen'} />
      <Stack.Screen component={SignUp} name={'SignUp'} />
    </Stack.Navigator>
  );
};

export default StackNav;
