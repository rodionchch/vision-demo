import React, {useState} from 'react';
import {Appbar, Menu} from 'react-native-paper';
import {getHeaderTitle} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import NavigationType from 'types/NavigationType';

export const getNavigationBarSettings = (
  props: BottomTabHeaderProps | NativeStackHeaderProps | NavigationType,
) => <NavigationBarSettings {...props} />;

const NavigationBarSettings = ({
  navigation,
  route,
  options,
  back,
}: BottomTabHeaderProps | NativeStackHeaderProps | NavigationType) => {
  const {toggleDrawer} = useNavigation<NavigationType>();

  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : (
        <Appbar.Action icon={'menu'} onPress={toggleDrawer} />
      )}

      <Appbar.Content title={title} />
      {!back ? (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}>
          <Menu.Item
            onPress={() => {
              closeMenu();
            }}
            title={'Logout'}
          />
        </Menu>
      ) : null}
    </Appbar.Header>
  );
};

export default NavigationBarSettings;