import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useRoute} from '@react-navigation/native';

import NavigationType from 'types/NavigationType';
import PhoneBookScreen from 'screens/PhoneBookScreen';
import SmsRoot from './SmsRoot';
import SmsList from './SmsList';
import {getAppbar} from './Appbar';

const Stack = createNativeStackNavigator();

const Sms = () => {
  const {params} = useRoute<NavigationType>();
  const tabs = params?.params?.tabs;

  return (
    <Stack.Navigator
      initialRouteName="SmsRoot"
      screenOptions={{
        header: getAppbar,
      }}>
      <Stack.Screen
        name="SmsRoot"
        component={SmsRoot}
        options={{title: 'SMS'}}
      />
      <Stack.Screen
        name="SmsList"
        component={SmsList}
        options={{title: 'SMS'}}
        initialParams={{tabs}}
      />
      <Stack.Screen
        name="PhoneBookRoot"
        component={PhoneBookScreen}
        options={{title: 'PhoneBook'}}
      />
    </Stack.Navigator>
  );
};

export default Sms;
