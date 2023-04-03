import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getNavigationBar} from 'components/Navigation/NavigationBar';
import PhoneBook from './PhoneBook';

const Stack = createNativeStackNavigator();

const PhoneBookScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="List"
      screenOptions={{
        header: getNavigationBar,
      }}>
      <Stack.Screen name="PhoneBook" component={PhoneBook} />
    </Stack.Navigator>
  );
};

export default PhoneBookScreen;
