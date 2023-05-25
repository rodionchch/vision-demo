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

import {tabs, groups, contacts, myPhoneNumbers} from './data';

import * as s from './styles';
import menu from './menu';
import useSms from 'screens/Sms/useSms';

const PhoneBook = () => {
  useToggleDrawer();
  const {setOptions} = useNavigation();
  const {params} = useRoute<NavigationType>();

  const {navigate} = useNavigation<NavigationType>();

  useEffect(() => {
    setOptions({animation: params?.fromDrawer ? 'none' : 'default'});
  });

  const {velocity, extended, onScroll} = useFAB();

  const {toggleMenu, menuVisible, onLongPress, contextualMenuCoord} = useMenu();

  const {tabs: smsTabs} = useSms();

  return (
    <s.PhoneBook>
      <Menu
        menu={menu}
        visible={menuVisible}
        toggleMenu={toggleMenu}
        contextualMenuCoord={contextualMenuCoord}
      />
      <Tabs tabs={tabs}>
        {[
          <>
            <s.PhoneBookList onScroll={onScroll}>
              <ListByKey
                data={groups}
                onLongPress={onLongPress}
                onPress={() => {
                  navigate('Group');
                }}
              />
            </s.PhoneBookList>
            <FAB
              visible={true}
              animatedValue={velocity}
              extended={extended}
              label={'Add Group    '}
              animateFrom={'right'}
              iconMode={'static'}
            />
          </>,

          <s.PhoneBookList>
            <ListByKey
              data={contacts}
              onPress={() => {
                navigate('SmsChat');
              }}
              onLongPress={onLongPress}
            />
          </s.PhoneBookList>,

          <s.PhoneBookList>
            <ListByKey
              data={myPhoneNumbers}
              onLongPress={onLongPress}
              onPress={() => {
                navigate('SmsList', {
                  folder: 0,
                  tabs: smsTabs,
                });
              }}
            />
          </s.PhoneBookList>,
        ]}
      </Tabs>
    </s.PhoneBook>
  );
};

export default PhoneBook;
