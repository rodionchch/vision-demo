import React from 'react';

import {
  GestureResponderEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native/types';
import {useNavigation} from '@react-navigation/native';

import List from 'components/List';
import Tabs from 'components/Tabs';
import Menu, {ContextualMenuCoord} from 'components/Menu';
import FAB from 'components/FAB';
import Modal from 'components/Modal';
import NewEmail from 'components/NewEmail';
import useMailList from './useMailList';
import useFAB from 'hooks/useFAB';
import useMenu from 'hooks/useMenu';
import NavigationType from 'types/NavigationType';

import data from './data';
import menu from '../menu';

import * as s from './styles';

type MailListContentProps = {
  menuVisible: boolean | {id: number};
  toggleMenu: () => void;
  contextualMenuCoord: ContextualMenuCoord;
  onLongPress: (event: GestureResponderEvent, id: number) => void;
  onScroll: ({nativeEvent}: NativeSyntheticEvent<NativeScrollEvent>) => void;
};

const MailListContent: React.FC<MailListContentProps> = ({
  menuVisible,
  toggleMenu,
  contextualMenuCoord,
  onLongPress,
  onScroll,
}) => {
  const {navigate} = useNavigation<NavigationType>();
  return (
    <s.MailList onScroll={onScroll}>
      <Menu
        menu={menu}
        visible={menuVisible}
        toggleMenu={toggleMenu}
        contextualMenuCoord={contextualMenuCoord}
      />
      <List
        selected={menuVisible}
        data={data}
        onPress={() => {
          navigate('MailView');
        }}
        onLongPress={onLongPress}
      />

      <s.MailListPlug />
    </s.MailList>
  );
};

const MailList = () => {
  const {params, modalRef} = useMailList();

  const {toggleMenu, menuVisible, onLongPress, contextualMenuCoord} = useMenu();

  const {velocity, extended, onScroll} = useFAB();

  return (
    <>
      <Tabs tabs={params?.tabs}>
        <MailListContent
          menuVisible={menuVisible}
          toggleMenu={toggleMenu}
          contextualMenuCoord={contextualMenuCoord}
          onLongPress={onLongPress}
          onScroll={onScroll}
        />
      </Tabs>

      <FAB
        visible={true}
        animatedValue={velocity}
        extended={extended}
        label={'New Message'}
        animateFrom={'right'}
        iconMode={'static'}
        onPress={() => {
          modalRef.current?.present();
        }}
      />

      <Modal
        modalRef={modalRef}
        title={'New Message'}
        actions={[
          {
            label: 'Cancel',
            onPress: () => {
              modalRef.current?.close();
            },
          },
          {label: 'Send', onPress: () => {}},
        ]}>
        <NewEmail />
      </Modal>
    </>
  );
};

export default MailList;
