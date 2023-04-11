import React from 'react';
import {useRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MailBookScreen from 'screens/MailBookScreen';
import {getNavigationBar} from './NavigationBar';
import MailListScreen from './MailListScreen';
import MailScreen from './MailScreen';

const Stack = createNativeStackNavigator();

const MailScreenRoot = () => {
  const {params} = useRoute();
  const tabs = params?.params?.tabs;

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
        initialParams={{tabs}}
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
