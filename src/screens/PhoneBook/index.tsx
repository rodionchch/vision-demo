import React from 'react';
import {useToggleDrawer} from 'hooks/useDrawer';
import Tabs from 'components/Tabs';
import ListByKey from 'components/ListByKey';
import FAB from 'components/FAB';
import Menu from 'components/Menu';
import Modal from 'components/Modal';
import EditBook from 'components/EditBook';
import useFAB from 'hooks/useFAB';
import useMenu from 'hooks/useMenu';
import useSms from 'screens/Sms/useSms';
import usePhoneBook from './usePhoneBook';

import {tabs, groups, contacts, myPhoneNumbers} from './data';
import menu from './menu';

import * as s from './styles';

const PhoneBook = () => {
  useToggleDrawer();

  const {navigate, modalRef, book, addBook} = usePhoneBook();

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
                menuVisible={menuVisible}
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
              label={'Add a Group  '}
              animateFrom={'right'}
              iconMode={'static'}
              onPress={() => {
                modalRef.current?.present();
              }}
            />
          </>,

          <s.PhoneBookList>
            <ListByKey
              data={contacts}
              menuVisible={menuVisible}
              onPress={() => {
                navigate('SmsChat');
              }}
              onLongPress={onLongPress}
            />
          </s.PhoneBookList>,

          <s.PhoneBookList>
            <ListByKey
              data={myPhoneNumbers}
              menuVisible={menuVisible}
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

      <Modal
        modalRef={modalRef}
        title={'Add a Group'}
        actions={[
          {
            label: 'Cancel',
            onPress: () => {
              modalRef.current?.close();
            },
          },
          {
            label: 'Add',
            onPress: () => {
              modalRef.current?.close();
            },
          },
        ]}>
        <EditBook book={book} setBook={addBook} />
      </Modal>
    </s.PhoneBook>
  );
};

export default PhoneBook;
