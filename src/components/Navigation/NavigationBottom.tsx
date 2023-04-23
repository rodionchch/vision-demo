import React, {useEffect, useRef} from 'react';
import {BottomNavigation, MD3Colors} from 'react-native-paper';
import {CommonActions} from '@react-navigation/native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {useAppSelector} from 'store/hooks';

import * as s from './styles';
import {Animated} from 'react-native';

export const getNavigationBottom = (props: BottomTabBarProps) => (
  <NavigationBottom {...props} />
);

const NavigationBottom = ({
  navigation,
  state,
  descriptors,
  insets,
}: BottomTabBarProps) => {
  const {rootScreen} = useAppSelector(({app}) => app);

  const translateYAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(translateYAnim, {
      toValue: rootScreen ? 0 : 120,
      duration: 160,
      useNativeDriver: true,
    }).start();
  }, [translateYAnim, rootScreen]);

  return (
    <BottomNavigation.Bar
      style={{
        position: 'absolute',
        transform: [{translateY: translateYAnim}],
      }}
      navigationState={state}
      safeAreaInsets={insets}
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
              ...CommonActions.navigate(route.name),
              target: state.key,
            });
          }
        }
      }}
      renderIcon={({route, focused, color: rgba}) => {
        const {disabled} = route?.params;
        const color = !disabled ? rgba : MD3Colors.secondary40;
        const {options} = descriptors[route.key];
        if (options.tabBarIcon) {
          return options.tabBarIcon({focused, color, size: 24});
        }

        return null;
      }}
      renderLabel={({route, focused, color}) => {
        const {disabled} = route?.params;
        return (
          <s.NavigationBottomLabel disabled={disabled}>
            {route?.name}
          </s.NavigationBottomLabel>
        );
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
