import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationBar from 'components/Navigation/NavigationBar';
import Mailbook from './Mailbook';

const Stack = createNativeStackNavigator();

const MailbookScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="List"
      screenOptions={{
        header: props => <NavigationBar {...props} />,
      }}>
      <Stack.Screen name="Mailbook" component={Mailbook} />
    </Stack.Navigator>
  );
};

export default MailbookScreen;
