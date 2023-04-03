import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {Avatar, Title, Drawer} from 'react-native-paper';
import NavigationType from 'types/NavigationType';
import {getIcon} from '../Icon';
import menu from './menu';

export const getDrawerContent = () => <DrawerContent />;

const DrawerContent = () => {
  const {navigate} = useNavigation<NavigationType>();

  return (
    <DrawerContentScrollView>
      <View>
        <View style={styles.userInfoSection}>
          <Avatar.Text label="R" size={50} />
          <Title style={styles.title}>Rodion Chegodaev</Title>
        </View>

        {menu?.map((section, index) => (
          <Drawer.Section key={index} showDivider={index + 1 < menu?.length}>
            {section?.map(({name, label, icon}, index) => (
              <DrawerItem
                key={`${name}-${index}`}
                icon={props => getIcon(icon, props)}
                label={label || name}
                onPress={() => {
                  navigate(name);
                }}
              />
            ))}
          </Drawer.Section>
        ))}
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  userInfoSection: {
    paddingLeft: 20,
    marginBottom: 15,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default DrawerContent;
