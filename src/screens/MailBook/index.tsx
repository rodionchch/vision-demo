import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import NavigationType from 'types/NavigationType';
import {useToggleDrawer} from 'hooks/useDrawer';
import Tabs from 'components/Tabs';
import ListByKey from 'components/ListByKey';
import FAB from 'components/FAB';
import Menu from 'components/Menu';
import useFAB from 'hooks/useFAB';
import useMenu from 'hooks/useMenu';
import useMail from 'screens/Mail/useMail';
import {tabs, groups, contacts, myMailboxes} from './data';
import menu from './menu';

import * as s from './styles';

const MailBook = () => {
  useToggleDrawer();

  const {setOptions} = useNavigation();
  const {params} = useRoute<NavigationType>();
  const {navigate} = useNavigation<NavigationType>();

  useEffect(() => {
    setOptions({animation: params?.fromDrawer ? 'none' : 'default'});
  });

  const {velocity, extended, onScroll} = useFAB();

  const {toggleMenu, menuVisible, onLongPress, contextualMenuCoord} = useMenu();

  const {tabs: mailTabs} = useMail();

  return (
    <s.MailBook>
      <Menu
        menu={menu}
        visible={menuVisible}
        toggleMenu={toggleMenu}
        contextualMenuCoord={contextualMenuCoord}
      />
      <Tabs tabs={tabs}>
        {[
          <>
            <s.MailBookList onScroll={onScroll}>
              <ListByKey
                data={groups}
                onLongPress={onLongPress}
                onPress={() => {
                  navigate('Group');
                }}
              />
            </s.MailBookList>
            <FAB
              visible={true}
              animatedValue={velocity}
              extended={extended}
              label={'Add Group    '}
              animateFrom={'right'}
              iconMode={'static'}
            />
          </>,

          <s.MailBookList>
            <ListByKey
              data={contacts}
              onLongPress={onLongPress}
              onPress={() => {
                navigate('SmsChat');
              }}
            />
          </s.MailBookList>,
          <s.MailBookList>
            <ListByKey
              data={myMailboxes}
              onLongPress={onLongPress}
              onPress={() => {
                navigate('MailList', {
                  folder: 0,
                  tabs: mailTabs,
                });
              }}
            />
          </s.MailBookList>,
        ]}
      </Tabs>
    </s.MailBook>
  );
};

export default MailBook;
