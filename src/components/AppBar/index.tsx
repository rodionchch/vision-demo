import React, {useState} from 'react';
import {Menu, Appbar as PaperAppbar} from 'react-native-paper';
import {getHeaderTitle} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
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
  const {navigate, toggleDrawer} = useNavigation<NavigationType>();
  const title = getHeaderTitle(options, route.name);
  const {params} = route;

  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const getTitle = () => {
    if (route.name === 'Dashboard') {
      return params?.dashboard === 'Sms'
        ? params?.dashboard?.toUpperCase()
        : params?.dashboard;
    }
    return params?.name || title;
  };

  return (
    <PaperAppbar.Header mode="center-aligned">
      {back ? (
        <PaperAppbar.BackAction onPress={navigation.goBack} />
      ) : (
        <PaperAppbar.Action icon={'menu'} onPress={toggleDrawer} />
      )}

      {route.name === 'MailView' && <PaperAppbar.Action icon="" />}

      <PaperAppbar.Content title={getTitle()} />

      {route.name === 'Dashboard' && (
        <PaperAppbar.Action
          icon="book-edit-outline"
          onPress={() => {
            if (params?.dashboard === 'Sms') {
              navigate('PhoneBook');
            } else if (params?.dashboard === 'Mail') {
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

      {route.name === 'MailView' && (
        <>
          <PaperAppbar.Action icon="information-outline" onPress={() => {}} />
          <PaperAppbar.Action
            icon="comment-text-multiple-outline"
            onPress={() => {}}
          />
        </>
      )}
    </PaperAppbar.Header>
  );
};

export default AppBar;
