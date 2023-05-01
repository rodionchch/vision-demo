import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useRoute} from '@react-navigation/native';
import {GestureResponderEvent} from 'react-native/types';

import NavigationType from 'types/NavigationType';
import List from 'components/List';
import Tabs from 'components/Tabs';
import Menu, {ContextualMenuCoord} from 'components/Menu';
import data from './data';
import menu from '../menu';

const MailListContent = () => {
  const [menuVisible, setMenuVisible] = useState<boolean | {id: number}>(false);
  const [contextualMenuCoord, setContextualMenuCoor] =
    useState<ContextualMenuCoord>({x: 0, y: 0});

  const toggleMenu = () => setMenuVisible(!menuVisible);

  const onLongPress = (event: GestureResponderEvent, id: number) => {
    const {nativeEvent} = event;

    setContextualMenuCoor({
      x: nativeEvent.pageX,
      y: nativeEvent.pageY,
    });
    setMenuVisible({id});
  };

  return (
    <ScrollView>
      <Menu
        menu={menu}
        visible={menuVisible}
        toggleMenu={toggleMenu}
        contextualMenuCoord={contextualMenuCoord}
      />
      <List selected={menuVisible} data={data} onLongPress={onLongPress} />
    </ScrollView>
  );
};

const MailList = () => {
  const {params} = useRoute<NavigationType>();

  const tabsAll = [
    {key: '0', title: 'All Inbox'},
    {key: '1', title: 'All Unread'},
    {key: '2', title: 'All Sent'},
    {key: '3', title: 'All Favorites'},
    {key: '4', title: 'All Trash'},
  ];
  const tabs = [
    {key: '0', title: 'Inbox'},
    {key: '1', title: 'Unread'},
    {key: '2', title: 'Sent'},
    {key: '3', title: 'Favorites'},
    {key: '4', title: 'Trash'},
  ];

  return <Tabs tabs={tabs} component={MailListContent} />;
};

export default MailList;
