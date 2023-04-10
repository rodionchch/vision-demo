import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {getNavigationBar} from './NavigationBar';

import MailListScreen from './MailListScreen';
import MailBookScreen from 'screens/MailBookScreen';
import MailScreen from './MailScreen';

const Stack = createNativeStackNavigator();

const MailScreenRoot = () => {
  return (
    <Stack.Navigator
      initialRouteName="Mail"
      screenOptions={{
        header: getNavigationBar,
      }}>
      <Stack.Screen name="Mail" component={MailScreen} />
      <Stack.Screen
        name="MailList"
        component={MailListScreen}
        options={{title: 'Mail'}}
      />
      <Stack.Screen
        name="MailBookRoot"
        component={MailBookScreen}
        options={{title: 'MailBook'}}
      />
    </Stack.Navigator>
  );
};

export default MailScreenRoot;
