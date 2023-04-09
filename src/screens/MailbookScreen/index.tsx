import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getNavigationBar} from './NavigationBar';
import MailBook from './MailBook';

const Stack = createNativeStackNavigator();

const MailBookScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="MailBook"
      screenOptions={{
        header: getNavigationBar,
      }}>
      <Stack.Screen name="MailBook" component={MailBook} />
    </Stack.Navigator>
  );
};

export default MailBookScreen;
