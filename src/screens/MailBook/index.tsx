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
import useMail from 'screens/Mail/useMail';
import usePhoneBook from 'screens/PhoneBook/usePhoneBook';

import {tabs, groups, contacts, myMailboxes} from './data';
import menu from './menu';

import * as s from './styles';

const MailBook = () => {
  useToggleDrawer();

  const {navigate, modalRef, book, addBook} = usePhoneBook();

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
              label={'Add a Group  '}
              animateFrom={'right'}
              iconMode={'static'}
              onPress={() => {
                modalRef.current?.present();
              }}
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
    </s.MailBook>
  );
};

export default MailBook;
