import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getNavigationBarSettings} from './NavigationBar';
import SettingsRoot from './SettingsRoot';
import Profile from './Profile';
import Security from './Security';
import Theme from './Theme';
import Language from './Language';
import About from './About';

const Stack = createNativeStackNavigator();

const SettingsScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsRoot"
      screenOptions={{
        header: getNavigationBarSettings,
      }}>
      <Stack.Screen
        name="SettingsRoot"
        component={SettingsRoot}
        options={{title: 'Settings'}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        // options={{
        //   swipeEnabled: false,
        // }}
      />
      <Stack.Screen
        name="Security"
        component={Security}
        // options={{
        //   swipeEnabled: false,
        // }}
      />
      <Stack.Screen
        name="Theme"
        component={Theme}
        // options={{
        //   swipeEnabled: false,
        // }}
      />
      <Stack.Screen
        name="Language"
        component={Language}
        // options={{
        //   swipeEnabled: false,
        // }}
      />
      <Stack.Screen
        name="About"
        component={About}
        // options={{
        //   swipeEnabled: false,
        // }}
      />
    </Stack.Navigator>
  );
};

export default SettingsScreen;
