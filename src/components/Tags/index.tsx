import React from 'react';
import {StyleSheet} from 'react-native';
import {List} from 'react-native-paper';

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

const Tags: React.FC<TagsProps> = ({data}) => {
  return (
    <List.Section>
      {data?.map(({id, tag, icon, items}) => (
        <List.Accordion key={id} title={tag} left={getTagIcon(icon)}>
          {items?.map(({id: itemId, name, phone, icon: itemIcon}) => (
            <List.Item
              key={itemId}
              title={name}
              description={phone}
              onPress={() => {}}
              left={getItemIcon(itemIcon)}
            />
          ))}
        </List.Accordion>
      ))}
    </List.Section>
  );
};

const styles = StyleSheet.create({
  tagIcon: {paddingLeft: 8},
  itemIcon: {paddingLeft: 32},
});

export default Tags;
