import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getNavigationBar} from './NavigationBar';
import PhoneBook from './PhoneBook';

const Stack = createNativeStackNavigator();

const PhoneBookRootScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="PhoneBook"
      screenOptions={{
        header: getNavigationBar,
      }}>
      <Stack.Screen name="PhoneBook" component={PhoneBook} />
    </Stack.Navigator>
  );
};

export default PhoneBookRootScreen;
