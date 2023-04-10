import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import {getNavigationBar} from './NavigationBar';
import MailBook from './MailBook';

const Stack = createNativeStackNavigator();

const MailBookScreen = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="MailBook"
      screenOptions={{
        header: getNavigationBar,
        headerShown: navigation.getState().type === 'drawer',
      }}>
      <Stack.Screen name="MailBook" component={MailBook} />
    </Stack.Navigator>
  );
};

export default MailBookScreen;
