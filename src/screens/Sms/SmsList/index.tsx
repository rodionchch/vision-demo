import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';

import NavigationType from 'types/NavigationType';
import List, {ListDataItemType} from 'components/List';
import Tabs from 'components/Tabs';
import Menu from 'components/Menu';
import useSmsList from './useSmsList';

import data from './data';
import menu from '../menu';

type SmsListProps = {};

const SmsListContent = () => {
  const {menuVisible, toggleMenu, contextualMenuCoord, onLongPress} =
    useSmsList();
  const {navigate} = useNavigation<NavigationType>();

  return (
    <ScrollView>
      <Menu
        menu={menu}
        visible={menuVisible}
        toggleMenu={toggleMenu}
        contextualMenuCoord={contextualMenuCoord}
      />
      <List
        selected={menuVisible}
        data={data}
        onPress={({id}: ListDataItemType) => {
          navigate('Sms', {
            screen: 'SmsChat',
            params: {
              id,
            },
          });
        }}
        onLongPress={onLongPress}
      />
    </ScrollView>
  );
};

const SmsList: React.FC<SmsListProps> = () => {
  const {params} = useRoute<NavigationType>();

  return <Tabs tabs={params?.tabs} component={SmsListContent} />;
};

export default SmsList;
