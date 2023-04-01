import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export const NavigatorTab = ({name, label, component, icon}) => {
  return (
    <Tab.Screen
      name={name}
      component={component}
      options={{
        tabBarLabel: label,
        tabBarIcon: ({color, size}) => (
          <Icon name={icon} size={size} color={color} />
        ),
      }}
    />
  );
};

export default NavigatorTab;
