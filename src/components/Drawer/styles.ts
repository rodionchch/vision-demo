import styled from 'styled-components/native';
import {Drawer as PaperDrawer, Avatar, Title} from 'react-native-paper';
import {DrawerItem as NavigationDrawer} from '@react-navigation/drawer';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Drawer = styled(SafeAreaView)``;

export const DrawerUserInfo = styled.View`
  padding-left: 20px;
  margin-bottom: 15px;
`;

export const DrawerAvatarText = styled(Avatar.Text).attrs({
  size: 50,
})``;

export const DrawerTitle = styled(Title)`
  margin-top: 20px;
  font-weight: bold;
`;

export const DrawerSection = styled(PaperDrawer.Section)``;

export const DrawerItem = styled(NavigationDrawer).attrs(
  (props: {disabled?: boolean}) => props.disabled && {pressOpacity: 1},
)<{
  disabled?: boolean;
}>`
  ${props => props.disabled && `opacity: 0.3;`}
`;
