import React, {useContext, useState} from 'react';
import {Appbar, Menu} from 'react-native-paper';
import {getHeaderTitle} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
import {PreferencesContext} from 'components/App';

const NavigationBar = ({navigation, route, options, back}) => {
  const {toggleDrawer} = useNavigation();
  const {toggleTheme, isThemeDark} = useContext(PreferencesContext);

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
              toggleTheme();
              closeMenu();
            }}
            title={'Change Theme'}
          />
        </Menu>
      ) : null}
    </Appbar.Header>
  );
};

export default NavigationBar;
