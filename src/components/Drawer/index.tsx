import React from 'react';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import LoginScreen from 'screens/LoginScreen';
import HomeScreen from 'screens/HomeScreen';
import PhoneBook from 'screens/PhoneBook';
import MailBook from 'screens/MailBook';
import Settings from 'screens/Settings';
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
        <DrawerNavigator.Screen name="DrawerPhoneBook" component={PhoneBook} />
        <DrawerNavigator.Screen name="DrawerMailBook" component={MailBook} />
        <DrawerNavigator.Screen name="Settings" component={Settings} />
      </DrawerNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Drawer;
