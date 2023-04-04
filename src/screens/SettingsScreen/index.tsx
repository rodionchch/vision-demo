import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getNavigationBarSettings} from 'components/Navigation/NavigationBarSettings';
import Settings from './Settings';

const Stack = createNativeStackNavigator();

const SettingsScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="List"
      screenOptions={{
        header: getNavigationBarSettings,
      }}>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default SettingsScreen;
