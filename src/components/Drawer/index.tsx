import React from 'react';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import LoginScreen from 'screens/LoginScreen';
import HomeScreen from 'screens/HomeScreen';
import PhoneBookScreen from 'screens/PhoneBookScreen';
import MailBookScreen from 'screens/MailBookScreen';
import SettingsScreen from 'screens/SettingsScreen';
import {getDrawerContent} from './DrawerContent';

const DrawerNavigator = createDrawerNavigator();

type DrawerProps = {
  theme: Theme;
};

const Drawer: React.FC<DrawerProps> = ({theme}) => {
  return (
    <NavigationContainer theme={theme}>
      <DrawerNavigator.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
        drawerContent={getDrawerContent}>
        <DrawerNavigator.Screen name="Home" component={HomeScreen} />
        <DrawerNavigator.Screen
          name="Login"
          component={LoginScreen}
          options={{swipeEnabled: false}}
        />
        <DrawerNavigator.Screen
          name="PhoneBookRoot"
          component={PhoneBookScreen}
        />
        <DrawerNavigator.Screen
          name="MailBookRoot"
          component={MailBookScreen}
        />
        <DrawerNavigator.Screen
          name="SettingsRoot"
          component={SettingsScreen}
        />
      </DrawerNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Drawer;
