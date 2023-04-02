import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import DrawerContent from './DrawerContent';

import HomeScreen from 'screens/HomeScreen';
import PhonebookScreen from 'screens/PhonebookScreen';
import MailbookScreen from 'screens/MailbookScreen';
import SettingsScreen from 'screens/SettingsScreen';

const DrawerNavigator = createDrawerNavigator();

type DrawerProps = {
  theme: any;
};

const Drawer: React.FC<DrawerProps> = ({theme}) => {
  return (
    <NavigationContainer theme={theme}>
      <DrawerNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}
        drawerContent={() => <DrawerContent />}>
        <DrawerNavigator.Screen name="Home" component={HomeScreen} />
        <DrawerNavigator.Screen name="Phonebook" component={PhonebookScreen} />
        <DrawerNavigator.Screen name="Mailbook" component={MailbookScreen} />
        <DrawerNavigator.Screen name="Settings" component={SettingsScreen} />
      </DrawerNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Drawer;
