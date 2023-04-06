import React, {useState} from 'react';
import {GestureResponderEvent, StyleSheet} from 'react-native';
import {List, MD3Colors, Text, TouchableRipple} from 'react-native-paper';

import Menu, {ContextualMenuCoord} from 'components/Menu';
import menu from './menu';

type TagsProps = {
  data: {
    id: number;
    tag: string;
    items?: {
      id: number;
      name: string;
      phone?: string;
      icon?: string;
    }[];
  }[];
};

const getTagIcon = (icon?: string) => () =>
  icon && <List.Icon icon={icon} style={styles.tagIcon} />;

const getItemIcon = (icon?: string) => () =>
  icon && <List.Icon icon={icon} style={styles.itemIcon} />;

const getCount = (count?: number) => () =>
  count !== undefined && <Text>{count}</Text>;

const Tags: React.FC<TagsProps> = ({data}) => {
  const [contextualMenuCoord, setContextualMenuCoor] =
    useState<ContextualMenuCoord>({x: 0, y: 0});
  const [visible, setVisible] = useState<boolean | {id: number}>(false);

  const onLongPress = (event: GestureResponderEvent, tag: {id: number}) => {
    const {nativeEvent} = event;

    setContextualMenuCoor({
      x: nativeEvent.pageX,
      y: nativeEvent.pageY,
    });
    setVisible(tag);
  };

  const toggleMenu = () => setVisible(!visible);

  return (
    <>
      <Menu
        menu={menu}
        visible={visible}
        toggleMenu={toggleMenu}
        contextualMenuCoord={contextualMenuCoord}
      />

      <List.Section>
        {data?.map(({id, tag, icon, items}) => (
          <List.Accordion key={id} title={tag} left={getTagIcon(icon)}>
            {items?.map(({id: itemId, name, phone, icon: itemIcon}) => (
              <TouchableRipple
                key={itemId}
                onPress={() => {}}
                onLongPress={event => {
                  onLongPress(event, {id: itemId});
                }}
                style={(() => {
                  if (typeof visible === 'object' && visible.id === itemId) {
                    return {backgroundColor: MD3Colors.secondary30};
                  }
                  return null;
                })()}>
                <List.Item
                  title={name}
                  description={phone}
                  left={getItemIcon(itemIcon)}
                  right={getCount(0)}
                />
              </TouchableRipple>
            ))}
          </List.Accordion>
        ))}
      </List.Section>
    </>
  );
};

const styles = StyleSheet.create({
  tagIcon: {paddingLeft: 8},
  itemIcon: {marginLeft: -32},
});

export default Tags;
