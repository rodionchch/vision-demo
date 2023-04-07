import React from 'react';
import {StyleSheet} from 'react-native';
import {List as PaperList, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import NavigationType from 'types/NavigationType';

type ListProps = {
  title?: string;
  data: {
    id?: number;
    title: string;
    icon?: string;
    text?: string;
    selected?: boolean;
    onPress?: () => void;
  }[];
};

const getListIcon = (icon?: string) => () =>
  icon && <PaperList.Icon icon={icon} style={styles.icon} />;

const getText = (text?: string) => () =>
  text !== undefined && <Text>{text}</Text>;

const List: React.FC<ListProps> = ({title: headerTitle, data}) => {
  const {navigate} = useNavigation<NavigationType>();
  return (
    <PaperList.Section>
      {!!headerTitle && (
        <PaperList.Subheader>{headerTitle}</PaperList.Subheader>
      )}
      {data?.map(({id, title, icon, text, selected, onPress}, index) => (
        <PaperList.Item
          key={id || `${title}-${index}`}
          title={title}
          onPress={() => {
            if (onPress) {
              onPress();
            } else {
              navigate(title);
            }
          }}
          left={getListIcon(icon)}
          right={selected ? getListIcon('check') : getText(text)}
        />
      ))}
    </PaperList.Section>
  );
};

const styles = StyleSheet.create({
  icon: {paddingLeft: 16},
});

export default List;
