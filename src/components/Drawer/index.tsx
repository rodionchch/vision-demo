import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from 'screens/HomeScreen';
import DrawerContent from '../Drawer/DrawerContent';

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
      </DrawerNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Drawer;
