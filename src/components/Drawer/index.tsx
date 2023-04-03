import React from 'react';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

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
        screenOptions={{
          headerShown: false,
        }}
        drawerContent={getDrawerContent}>
        <DrawerNavigator.Screen name="Home" component={HomeScreen} />
        <DrawerNavigator.Screen name="PhoneBook" component={PhoneBookScreen} />
        <DrawerNavigator.Screen name="MailBook" component={MailBookScreen} />
        <DrawerNavigator.Screen name="Settings" component={SettingsScreen} />
      </DrawerNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Drawer;
