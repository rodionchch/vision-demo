import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ChatScreen from 'screens/ChatScreen';
import NavigationBar from './NavigationBar';
import NavigationBottom from './NavigationBottom';
import {getIcon} from 'components/Icon';

import tabs from './tabs';

const Tab = createBottomTabNavigator();

type NavigationProps = {};

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Sms"
        screenOptions={{
          header: props => <NavigationBar {...props} />,
        }}
        tabBar={props => <NavigationBottom {...props} />}>
        {tabs.map(({name, label, icon}, index) => (
          <Tab.Screen
            key={index}
            name={name}
            component={ChatScreen}
            options={{
              tabBarLabel: label,
              headerTitle: label,
              tabBarIcon: props => getIcon(icon, props),
            }}
          />
        ))}
      </Tab.Navigator>
    </>
  );
};

export default Navigation;
