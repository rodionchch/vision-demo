import React from 'react';
import {useNavigation} from '@react-navigation/native';

import NavigationType from 'types/NavigationType';
import {
  GestureResponderEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native/types';
import List, {ListDataItemType} from 'components/List';
import Tabs from 'components/Tabs';
import Menu, {ContextualMenuCoord} from 'components/Menu';
import FAB from 'components/FAB';
import useSmsList from './useSmsList';
import useFAB from 'hooks/useFAB';

import data from './data';
import menu from '../menu';

import * as s from './styles';

type SmsListProps = {};

type SmsListContentProps = {
  menuVisible: boolean | {id: number};
  toggleMenu: () => void;
  contextualMenuCoord: ContextualMenuCoord;
  onLongPress: (event: GestureResponderEvent, id: number) => void;
  onScroll: ({nativeEvent}: NativeSyntheticEvent<NativeScrollEvent>) => void;
};

const SmsListContent: React.FC<SmsListContentProps> = ({
  menuVisible,
  toggleMenu,
  contextualMenuCoord,
  onLongPress,
  onScroll,
}) => {
  const {navigate} = useNavigation<NavigationType>();

  return (
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
  );
};

const SmsList: React.FC<SmsListProps> = () => {
  const {params, menuVisible, toggleMenu, contextualMenuCoord, onLongPress} =
    useSmsList();

  const {velocity, extended, onScroll} = useFAB();

  return (
    <>
      <Tabs tabs={params?.tabs}>
        <SmsListContent
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

export default SmsList;
