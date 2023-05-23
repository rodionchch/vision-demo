import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import NavigationType from 'types/NavigationType';
import List, {ListDataItemType} from 'components/List';
import Tabs from 'components/Tabs';
import Menu from 'components/Menu';
import FAB from 'components/FAB';
import useSmsList from './useSmsList';

import data from './data';
import menu from '../menu';

import * as s from './styles';

type SmsListProps = {};

const SmsListContent = () => {
  const {
    menuVisible,
    toggleMenu,
    contextualMenuCoord,
    onLongPress,
    velocity,
    extended,
    onScroll,
  } = useSmsList();
  const {navigate} = useNavigation<NavigationType>();

  return (
    <>
      <s.SmsList onScroll={onScroll}>
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
            navigate('SmsChat', {
              id,
            });
          }}
          onLongPress={onLongPress}
        />
        <s.SmsListPlug />
      </s.SmsList>

      <FAB
        visible={true}
        animatedValue={velocity}
        extended={extended}
        label={'New Message'}
        animateFrom={'right'}
        iconMode={'static'}
      />
    </>
  );
};

const SmsList: React.FC<SmsListProps> = () => {
  const {params} = useRoute<NavigationType>();

  return <Tabs tabs={params?.tabs} component={SmsListContent} />;
};

export default SmsList;
