import React from 'react';
import {Appbar as PaperAppbar} from 'react-native-paper';
import {getHeaderTitle} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import NavigationType from 'types/NavigationType';

export const getAppbar = (
  props: BottomTabHeaderProps | NativeStackHeaderProps | NavigationType,
) => <Appbar {...props} />;

const Appbar = ({
  navigation,
  route,
  options,
  back,
}: BottomTabHeaderProps | NativeStackHeaderProps | NavigationType) => {
  const {toggleDrawer} = useNavigation<NavigationType>();
  const title = getHeaderTitle(options, route.name);

  return (
    <PaperAppbar.Header>
      {back || route.params?.back ? (
        <PaperAppbar.BackAction onPress={navigation.goBack} />
      ) : (
        <PaperAppbar.Action icon={'menu'} onPress={toggleDrawer} />
      )}

      <PaperAppbar.Content title={title} />
    </PaperAppbar.Header>
  );
};

export default Appbar;
