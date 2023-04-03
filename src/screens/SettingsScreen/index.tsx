import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getNavigationBar} from 'components/Navigation/NavigationBar';
import Settings from './Settings';

const Stack = createNativeStackNavigator();

const SettingsScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="List"
      screenOptions={{
        header: getNavigationBar,
      }}>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default SettingsScreen;
