import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {getNavigationBar} from './NavigationBar';
import {getNavigationBottom} from './NavigationBottom';
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
          header: getNavigationBar,
        }}
        tabBar={getNavigationBottom}>
        {tabs.map(({name, label, icon, component, disabled}, index) => (
          <Tab.Screen
            key={`${name}-${index}`}
            name={name}
            component={component}
            options={{
              tabBarLabel: label,
              headerTitle: label,
              tabBarIcon: props => getIcon(icon, props),
            }}
            initialParams={{disabled}}
          />
        ))}
      </Tab.Navigator>
    </>
  );
};

export default Navigation;
