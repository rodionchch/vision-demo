import React, {useState} from 'react';
import {Menu, Appbar as PaperAppbar} from 'react-native-paper';
import {getHeaderTitle} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {useAppSelector} from 'store/hooks';
import NavigationType from 'types/NavigationType';

export const getAppBar = (
  props: BottomTabHeaderProps | NativeStackHeaderProps | NavigationType,
) => <AppBar {...props} />;

const AppBar = ({
  navigation,
  route,
  options,
  back,
}: BottomTabHeaderProps | NativeStackHeaderProps | NavigationType) => {
  const {navigate, toggleDrawer, getParent} = useNavigation<NavigationType>();
  const title = getHeaderTitle(options, route.name);
  const {params} = route;

  const {dashboard} = useAppSelector(({app}) => app);

  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <PaperAppbar.Header mode="center-aligned">
      {back && route.name !== 'Settings' && !route?.params?.drawer ? (
        <PaperAppbar.BackAction onPress={navigation.goBack} />
      ) : (
        <PaperAppbar.Action icon={'menu'} onPress={toggleDrawer} />
      )}

      <PaperAppbar.Content title={params?.name || title} />

      {route.name === 'Dashboard' && (
        <PaperAppbar.Action
          icon="book-edit-outline"
          onPress={() => {
            if (dashboard === 'sms') {
              navigate('PhoneBook');
            } else if (dashboard === 'mail') {
              navigate('MailBook');
            }
          }}
        />
      )}

      {route.name === 'Settings' && (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <PaperAppbar.Action icon="dots-vertical" onPress={openMenu} />
          }>
          <Menu.Item
            onPress={() => {
              closeMenu();
            }}
            title={'Logout'}
          />
        </Menu>
      )}
    </PaperAppbar.Header>
  );
};

export default AppBar;
