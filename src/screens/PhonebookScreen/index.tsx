import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {getNavigationBar} from './NavigationBar';
import PhoneBook from './PhoneBook';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const PhoneBookRootScreen = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="PhoneBook"
      screenOptions={{
        header: getNavigationBar,
        headerShown: navigation.getState().type === 'drawer',
      }}>
      <Stack.Screen name="PhoneBook" component={PhoneBook} />
    </Stack.Navigator>
  );
};

export default PhoneBookRootScreen;
