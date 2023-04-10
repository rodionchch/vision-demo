import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SmsScreen from './SmsScreen';
import SmsListScreen from './SmsListScreen';
import {getNavigationBar} from './NavigationBar';
import PhoneBookScreen from 'screens/PhoneBookScreen';

const Stack = createNativeStackNavigator();

const SmsScreenRoot = () => {
  return (
    <Stack.Navigator
      initialRouteName="Sms"
      screenOptions={{
        header: getNavigationBar,
      }}>
      <Stack.Screen name="Sms" component={SmsScreen} />
      <Stack.Screen
        name="SmsList"
        component={SmsListScreen}
        options={{title: 'Sms'}}
      />
      <Stack.Screen
        name="PhoneBookRoot"
        component={PhoneBookScreen}
        options={{title: 'PhoneBook'}}
      />
    </Stack.Navigator>
  );
};

export default SmsScreenRoot;
