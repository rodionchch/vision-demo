import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {Avatar, Title, Drawer} from 'react-native-paper';
import {getIcon} from '../Icon';
import menu from './menu';

const DrawerContent = () => {
  const {navigate} = useNavigation();

  return (
    <DrawerContentScrollView>
      <View>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri: 'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
            }}
            size={50}
          />
          <Title style={styles.title}>Rodion Chegodaev</Title>
        </View>

        {menu?.map((section, index) => (
          <Drawer.Section key={index} showDivider={index + 1 < menu?.length}>
            {section?.map(({name, label, icon}, index) => (
              <DrawerItem
                key={index}
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
