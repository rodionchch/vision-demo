import React from 'react';

import {
  GestureResponderEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native/types';

import List from 'components/List';
import Tabs from 'components/Tabs';
import Menu, {ContextualMenuCoord} from 'components/Menu';
import FAB from 'components/FAB';
import useMailList from './useMailList';
import useFAB from 'hooks/useFAB';

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
  return (
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
  );
};

const MailList = () => {
  const {params, toggleMenu, menuVisible, onLongPress, contextualMenuCoord} =
    useMailList();

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
      />
    </>
  );
};

export default MailList;
