import React from 'react';
import {Appbar} from 'react-native-paper';
import {getHeaderTitle} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import NavigationType from 'types/NavigationType';

export const getNavigationBar = (
  props: BottomTabHeaderProps | NativeStackHeaderProps | NavigationType,
) => <NavigationBar {...props} />;

const NavigationBar = ({
  navigation,
  route,
  options,
  back,
}: BottomTabHeaderProps | NativeStackHeaderProps | NavigationType) => {
  const {toggleDrawer} = useNavigation<NavigationType>();
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      {back || route.params?.back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : (
        <Appbar.Action icon={'menu'} onPress={toggleDrawer} />
      )}

      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default NavigationBar;
