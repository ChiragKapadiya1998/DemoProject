import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import HomeScreen from '../screens/dashboard/HomeScreen';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Login} name={'Login'} />
      <Stack.Screen component={HomeScreen} name={'HomeScreen'} />
    </Stack.Navigator>
  );
};

export default StackNav;
