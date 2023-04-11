import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import List from 'components/List';
import data from '../data';
import Tabs from 'components/Tabs';
import Menu, {ContextualMenuCoord} from 'components/Menu';
import menu from './menu';
import {GestureResponderEvent} from 'react-native/types';

type SmsListScreenProps = {
  tabs: {
    key: string;
    title: string;
  }[];
};

const SmsList = () => {
  const [menuVisible, setMenuVisible] = useState<boolean | {id: number}>(false);
  const [contextualMenuCoord, setContextualMenuCoor] =
    useState<ContextualMenuCoord>({x: 0, y: 0});

  const toggleMenu = () => setMenuVisible(!menuVisible);

  const onLongPress = (event: GestureResponderEvent, id: number) => {
    console.log('jeje=====>');
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

const SmsListScreen: React.FC<SmsListScreenProps> = ({tabs}) => {
  return <Tabs tabs={tabs} component={SmsList} />;
};

export default SmsListScreen;
