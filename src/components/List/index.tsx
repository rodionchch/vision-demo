import React, {ReactNode} from 'react';
import {StyleSheet} from 'react-native';
import {List as PaperList, Text} from 'react-native-paper';

type ListProps = {
  title?: string;
  data: {
    id?: number;
    title: string;
    icon?: string;
    text?: string;
    right?: ReactNode;
    onPress?: () => void;
  }[];
};

const getListIcon = (icon?: string) => () =>
  icon && <PaperList.Icon icon={icon} style={styles.icon} />;

const getText = (text?: string) => () =>
  text !== undefined && <Text>{text}</Text>;

const List: React.FC<ListProps> = ({title: headerTitle, data}) => {
  return (
    <PaperList.Section>
      {!!headerTitle && (
        <PaperList.Subheader>{headerTitle}</PaperList.Subheader>
      )}
      {data?.map(({id, title, icon, text, right, onPress}, index) => (
        <PaperList.Item
          key={id || `${title}-${index}`}
          title={title}
          onPress={onPress}
          left={getListIcon(icon)}
          right={right ? () => right : getText(text)}
        />
      ))}
    </PaperList.Section>
  );
};

const styles = StyleSheet.create({
  icon: {paddingLeft: 16},
});

export default List;
