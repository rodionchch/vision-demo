import React, {ReactNode} from 'react';
import {GestureResponderEvent} from 'react-native/types';

import * as s from './styles';

export type ListDataItemType = {
  id?: number;
  title: string;
  icon?: string;
  text?: string;
  right?: ReactNode;
  description?: string;
};

type ListProps = {
  title?: string;
  data: ListDataItemType[];
  onLongPress?: (event: GestureResponderEvent, id: number) => void;
  selected?: boolean | {id: number};
  onPress?: (item: ListDataItemType) => void;
};

const getListIcon = (icon?: string) => () =>
  icon && <s.ListItemIcon icon={icon} />;

const getText = (text?: string) => () =>
  text !== undefined && <s.ListItemText>{text}</s.ListItemText>;

const List: React.FC<ListProps> = ({
  title: headerTitle,
  data,
  onLongPress,
  selected,
  onPress,
}) => {
  return (
    <s.List>
      {!!headerTitle && <s.ListHeader>{headerTitle}</s.ListHeader>}
      {data?.map((item, index) => (
        <s.ListItem
          key={item?.id || `${item?.title}-${index}`}
          title={item?.title}
          onPress={
            onPress
              ? () => {
                  onPress?.(item);
                }
              : undefined
          }
          onLongPress={
            onLongPress
              ? event => {
                  if (item?.id) {
                    onLongPress?.(event, item?.id);
                  }
                }
              : undefined
          }
          left={getListIcon(item?.icon)}
          right={item?.right ? () => item?.right : getText(item?.text)}
          description={item?.description}
          selected={
            (selected &&
              typeof selected === 'object' &&
              selected?.id === item?.id) ||
            (typeof selected !== 'object' && selected)
          }
        />
      ))}
    </s.List>
  );
};

export default List;
