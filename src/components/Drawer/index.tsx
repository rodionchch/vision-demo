import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import SmsScreen from '../../screens/SmsScreen';
import MailScreen from '../../screens/MailScreen';
import ChatScreen from '../../screens/ChatScreen';
import CallScreen from '../../screens/CallScreen';

import DrawerContent from '../Drawer/DrawerContent';
import NavigationBar from '../Navigation/NavigationBar';

const DrawerNavigator = createDrawerNavigator();

type DrawerProps = {
  theme: any;
};

const Drawer: React.FC<DrawerProps> = ({theme}) => {
  return (
    <NavigationContainer theme={theme}>
      <DrawerNavigator.Navigator
        screenOptions={{
          header: props => <NavigationBar {...props} />,
        }}
        drawerContent={() => <DrawerContent />}>
        <DrawerNavigator.Screen name="Sms" component={SmsScreen} />
        <DrawerNavigator.Screen name="Mail" component={MailScreen} />
        <DrawerNavigator.Screen name="Chat" component={ChatScreen} />
        <DrawerNavigator.Screen name="Call" component={CallScreen} />
      </DrawerNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Drawer;
