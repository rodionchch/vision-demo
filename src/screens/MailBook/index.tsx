import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import {getAppbar} from './Appbar';
import MailBookRoot from './MailBookRoot';

const Stack = createNativeStackNavigator();

const MailBook = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="MailBookRoot"
      screenOptions={{
        header: getAppbar,
        headerShown: navigation.getState().type === 'drawer',
      }}>
      <Stack.Screen
        name="MailBookRoot"
        component={MailBookRoot}
        options={{title: 'MailBook'}}
      />
    </Stack.Navigator>
  );
};

export default MailBook;
