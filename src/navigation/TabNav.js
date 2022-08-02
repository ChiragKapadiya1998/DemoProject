import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/dashboard/HomeScreen';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen component={HomeScreen} name={'Dashboard'} />
    </Tab.Navigator>
  );
};
