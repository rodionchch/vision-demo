import React from 'react';
import {useRoute} from '@react-navigation/native';

import NavigationType from 'types/NavigationType';
import List from 'components/List';
import Tabs from 'components/Tabs';
import Menu from 'components/Menu';
import FAB from 'components/FAB';
import useMailList from './useMailList';

import data from './data';
import menu from '../menu';

import * as s from './styles';

const MailListContent = () => {
  const {
    onScroll,
    velocity,
    extended,
    toggleMenu,
    menuVisible,
    onLongPress,
    contextualMenuCoord,
  } = useMailList();
  return (
    <>
      <s.MailList onScroll={onScroll}>
        <Menu
          menu={menu}
          visible={menuVisible}
          toggleMenu={toggleMenu}
          contextualMenuCoord={contextualMenuCoord}
        />
        <List selected={menuVisible} data={data} onLongPress={onLongPress} />

        <s.MailListPlug />
      </s.MailList>

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

const MailList = () => {
  const {params} = useRoute<NavigationType>();

  return <Tabs tabs={params?.tabs} component={MailListContent} />;
};

export default MailList;
