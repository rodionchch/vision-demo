import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import SmsScreen from 'screens/SmsScreen';
import MailScreen from 'screens/MailScreen';
import CallScreen from 'screens/CallScreen';
import ChatScreen from 'screens/ChatScreen';
import NavigationBar from './NavigationBar';
import NavigationBottom from './NavigationBottom';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

type NavigationProps = {
  theme?: any;
};

const Navigation: React.FC<NavigationProps> = ({theme}) => {
  return (
    <>
      <NavigationContainer theme={theme}>
        <Tab.Navigator
          initialRouteName="Sms"
          screenOptions={{
            header: props => <NavigationBar {...props} />,
          }}
          tabBar={props => <NavigationBottom {...props} />}>
          <Tab.Screen
            name="Chat"
            component={ChatScreen}
            options={{
              tabBarLabel: 'Chat',
              tabBarIcon: ({color, size}) => (
                <Icon name="forum-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Call"
            component={CallScreen}
            options={{
              tabBarLabel: 'Call',
              tabBarIcon: ({color, size}) => (
                <Icon name="phone-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Mail"
            component={MailScreen}
            options={{
              tabBarLabel: 'Mail',
              tabBarIcon: ({color, size}) => (
                <Icon name="email-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Sms"
            component={SmsScreen}
            options={{
              tabBarLabel: 'SMS',
              tabBarIcon: ({color, size}) => (
                <Icon
                  name="chat-processing-outline"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      {/* <NavigationContainer theme={theme}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            // header: props => <NavigationBar {...props} />,
          }}>
          <Stack.Screen name="Sms" component={SmsScreen} />
          <Stack.Screen name="Mail" component={MailScreen} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </>
  );
};

export default Navigation;
