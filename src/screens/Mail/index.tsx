import React from 'react';
import {useRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import NavigationType from 'types/NavigationType';
import {getAppbar} from './Appbar';
import MailList from './MailList';
import MailRoot from './MailRoot';
import MailBook from 'screens/MailBook';

const Stack = createNativeStackNavigator();

const Mail = () => {
  const {params} = useRoute<NavigationType>();
  const tabs = params?.params?.tabs;

  return (
    <Stack.Navigator
      initialRouteName="MailRoot"
      screenOptions={{
        header: getAppbar,
      }}>
      <Stack.Screen
        name="MailRoot"
        component={MailRoot}
        options={{title: 'Mail'}}
      />
      <Stack.Screen
        name="MailList"
        component={MailList}
        options={{title: 'Mail'}}
        initialParams={{tabs}}
      />
      <Stack.Screen
        name="MailBook"
        component={MailBook}
        options={{title: 'MailBook'}}
      />
    </Stack.Navigator>
  );
};

export default Mail;
