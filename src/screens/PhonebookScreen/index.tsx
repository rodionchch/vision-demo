import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationBar from 'components/Navigation/NavigationBar';
import Phonebook from './Phonebook';

const Stack = createNativeStackNavigator();

const PhonebookScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="List"
      screenOptions={{
        header: props => <NavigationBar {...props} />,
      }}>
      <Stack.Screen name="Phonebook" component={Phonebook} />
    </Stack.Navigator>
  );
};

export default PhonebookScreen;
