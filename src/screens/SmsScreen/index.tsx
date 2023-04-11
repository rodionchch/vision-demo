import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SmsScreen from './SmsScreen';
import SmsListScreen from './SmsListScreen';
import {getNavigationBar} from './NavigationBar';
import PhoneBookScreen from 'screens/PhoneBookScreen';
import {useRoute} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const SmsScreenRoot = () => {
  const {params} = useRoute();
  const tabs = params?.params?.tabs;

  const getSmsListScreen = () => tabs && <SmsListScreen tabs={tabs} />;

  return (
    <Stack.Navigator
      initialRouteName="Sms"
      screenOptions={{
        header: getNavigationBar,
      }}>
      <Stack.Screen name="Sms" component={SmsScreen} options={{title: 'SMS'}} />
      <Stack.Screen
        name="SmsList"
        component={getSmsListScreen}
        options={{title: 'SMS'}}
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
