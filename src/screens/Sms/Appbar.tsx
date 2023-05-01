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
  const {navigate, toggleDrawer} = useNavigation<NavigationType>();
  const title = getHeaderTitle(options, route.name);
  const {params} = route;

  return (
    <PaperAppbar.Header mode="center-aligned">
      {back ? (
        <PaperAppbar.BackAction onPress={navigation.goBack} />
      ) : (
        <PaperAppbar.Action icon={'menu'} onPress={toggleDrawer} />
      )}

      <PaperAppbar.Content title={params?.name || title} />

      {route.name === 'Sms' && (
        <PaperAppbar.Action
          icon="book-edit-outline"
          onPress={() => {
            navigate('Sms', {
              screen: 'PhoneBook',
            });
          }}
        />
      )}
    </PaperAppbar.Header>
  );
};

export default Appbar;
