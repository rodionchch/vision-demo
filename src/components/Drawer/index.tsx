import React from 'react';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {getDrawerContent} from './DrawerContent';
import Home from 'screens/Home';

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
          swipeEnabled: false,
        }}
        drawerContent={getDrawerContent}>
        <DrawerNavigator.Screen name="Home" component={Home} />
      </DrawerNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Drawer;
