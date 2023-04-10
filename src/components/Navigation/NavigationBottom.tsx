import React from 'react';
import {BottomNavigation} from 'react-native-paper';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

export const getNavigationBottom = (props: BottomTabBarProps) => (
  <NavigationBottom {...props} />
);

const NavigationBottom = ({
  navigation,
  state,
  descriptors,
  insets,
}: BottomTabBarProps) => {
  return (
    <BottomNavigation.Bar
      // style={{display: 'none'}}
      navigationState={state}
      safeAreaInsets={insets}
      // shifting={true}
      onTabPress={({route, preventDefault}) => {
        const {disabled} = route?.params;
        if (!disabled) {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (event.defaultPrevented) {
            preventDefault();
          } else {
            navigation.dispatch({
              ...CommonActions.navigate(route.name, route.params),
              target: state.key,
            });
          }
        }
      }}
      renderIcon={({route, focused, color: rgba}) => {
        const {disabled} = route?.params;
        const color = !disabled ? rgba : '#888';
        const {options} = descriptors[route.key];
        if (options.tabBarIcon) {
          return options.tabBarIcon({focused, color, size: 24});
        }

        return null;
      }}
      getLabelText={({route}) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.title;

        return label;
      }}
    />
  );
};

export default NavigationBottom;
