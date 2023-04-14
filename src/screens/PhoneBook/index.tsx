import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import PhoneBookRoot from './PhoneBookRoot';
import {getAppbar} from './Appbar';

const Stack = createNativeStackNavigator();

const PhoneBook = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="PhoneBookRoot"
      screenOptions={{
        header: getAppbar,
        headerShown: navigation.getState().type === 'drawer',
      }}>
      <Stack.Screen
        name="PhoneBookRoot"
        component={PhoneBookRoot}
        options={{title: 'PhoneBook'}}
      />
    </Stack.Navigator>
  );
};

export default PhoneBook;
