import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {getAppBar} from 'components/AppBar';

import Dashboard from 'screens/Dashboard';
import SmsList from 'screens/Sms/SmsList';
import SmsChat from 'screens/Sms/SmsChat';
import PhoneBook from 'screens/PhoneBook';
import MailList from 'screens/Mail/MailList';
import MailView from 'screens/Mail/MailView';
import MailBook from 'screens/MailBook';
import Group from 'screens/Group';
import Settings from 'screens/Settings';
import Profile from 'screens/Settings/Profile';
import Security from 'screens/Settings/Security';
import Theme from 'screens/Settings/Theme';
import Language from 'screens/Settings/Language';
import About from 'screens/Settings/About';

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        header: getAppBar,
      }}>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{animation: 'none'}}
        initialParams={{dashboard: 'Sms'}}
      />

      {/**
       * SMS
       */}

      <Stack.Screen
        name="SmsList"
        component={SmsList}
        options={{title: 'SMS'}}
      />
      <Stack.Screen
        name="SmsChat"
        component={SmsChat}
        options={{title: 'SMS'}}
      />

      <Stack.Screen
        name="PhoneBook"
        component={PhoneBook}
        options={{
          title: 'PhoneBook',
        }}
      />

      {/**
       * Mail
       */}

      <Stack.Screen
        name="MailList"
        component={MailList}
        options={{title: 'Mail'}}
      />
      <Stack.Screen
        name="MailView"
        component={MailView}
        options={{title: 'Inbox'}}
      />

      <Stack.Screen
        name="MailBook"
        component={MailBook}
        options={{
          title: 'MailBook',
        }}
      />

      <Stack.Screen
        name="Group"
        component={Group}
        options={{
          title: 'Group',
        }}
      />

      {/**
       * Settings
       */}

      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{title: 'Settings', animation: 'none'}}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Security" component={Security} />
      <Stack.Screen name="Theme" component={Theme} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default Home;
