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

type MailListProps = {
  tabs: {
    key: string;
    title: string;
  }[];
};

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
      <List data={data} onLongPress={onLongPress} />
    </ScrollView>
  );
};

const MailList: React.FC<MailListProps> = () => {
  const {params} = useRoute<NavigationType>();

  return <Tabs tabs={params?.tabs} component={MailListContent} />;
};

export default MailList;
