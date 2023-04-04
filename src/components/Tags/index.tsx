import React, {useState} from 'react';
import {GestureResponderEvent, StyleSheet} from 'react-native';
import {Divider, List, Menu, Text, TouchableRipple} from 'react-native-paper';

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

type ContextualMenuCoord = {x: number; y: number};

const getTagIcon = (icon?: string) => () =>
  icon && <List.Icon icon={icon} style={styles.tagIcon} />;

const getItemIcon = (icon?: string) => () =>
  icon && <List.Icon icon={icon} style={styles.itemIcon} />;

const getCount = (count?: number) => () =>
  count !== undefined && <Text>{count}</Text>;

const Tags: React.FC<TagsProps> = ({data}) => {
  const [contextualMenuCoord, setContextualMenuCoor] =
    React.useState<ContextualMenuCoord>({x: 0, y: 0});
  const [visible, setVisible] = useState(false);

  const onLongPress = (event: GestureResponderEvent) => {
    const {nativeEvent} = event;

    setContextualMenuCoor({
      x: nativeEvent.pageX,
      y: nativeEvent.pageY,
    });
    setVisible(true);
  };

  const toggleMenu = () => setVisible(!visible);

  return (
    <>
      <Menu
        visible={visible}
        onDismiss={toggleMenu}
        anchor={contextualMenuCoord}>
        <Menu.Item
          leadingIcon={'square-edit-outline'}
          onPress={toggleMenu}
          title="Edit"
        />
        <Menu.Item
          leadingIcon={'information-outline'}
          onPress={toggleMenu}
          title="Info"
        />
      </Menu>

      <List.Section>
        {data?.map(({id, tag, icon, items}) => (
          <List.Accordion key={id} title={tag} left={getTagIcon(icon)}>
            {items?.map(({id: itemId, name, phone, icon: itemIcon}) => (
              <TouchableRipple
                key={itemId}
                onPress={() => {}}
                onLongPress={onLongPress}>
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
