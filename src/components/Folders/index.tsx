import React from 'react';
import {StyleSheet} from 'react-native';
import {List, Text} from 'react-native-paper';

type FoldersProps = {
  title?: string;
  data: {
    id: number;
    title: string;
    icon?: string;
    count?: number;
  }[];
};

const getFolderIcon = (icon?: string) => () =>
  icon && <List.Icon icon={icon} style={styles.icon} />;

const getCount = (count?: number) => () =>
  count !== undefined && <Text>{count}</Text>;

const Folders: React.FC<FoldersProps> = ({title: headerTitle, data}) => {
  return (
    <List.Section>
      {!!headerTitle && <List.Subheader>{headerTitle}</List.Subheader>}
      {data?.map(({id, title, icon, count}) => (
        <List.Item
          key={id}
          title={title}
          onPress={() => {}}
          left={getFolderIcon(icon)}
          right={getCount(count)}
        />
      ))}
    </List.Section>
  );
};

const styles = StyleSheet.create({
  icon: {paddingLeft: 16},
});

export default Folders;
