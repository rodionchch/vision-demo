import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigationType from 'types/NavigationType';

import {getNavigationBottom} from './NavigationBottom';
import {getIcon} from 'components/Icon';

import tabs from './tabs';

const Tab = createBottomTabNavigator();

type NavigationProps = {};

const Navigation: React.FC<NavigationProps> = () => {
  const {navigate} = useNavigation<NavigationType>();

  useEffect(() => {
    navigate('Login');
  }, [navigate]);

  return (
    <>
      <Tab.Navigator
        initialRouteName="Sms"
        screenOptions={{
          headerShown: false,
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
