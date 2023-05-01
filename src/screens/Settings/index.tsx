import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingsRoot from './SettingsRoot';
import Profile from './Profile';
import Security from './Security';
import Theme from './Theme';
import Language from './Language';
import About from './About';

const Stack = createNativeStackNavigator();

const Settings = () => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsRoot"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="SettingsRoot"
        component={SettingsRoot}
        options={{title: 'Settings'}}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Security" component={Security} />
      <Stack.Screen name="Theme" component={Theme} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default Settings;
