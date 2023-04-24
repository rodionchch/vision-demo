import React, {ReactNode} from 'react';
import {GestureResponderEvent} from 'react-native/types';

import * as s from './styles';

type ListProps = {
  title?: string;
  data: {
    id?: number;
    title: string;
    icon?: string;
    text?: string;
    right?: ReactNode;
    onPress?: () => void;
    description?: string;
  }[];
  onLongPress?: (event: GestureResponderEvent, id: number) => void;
  selected?: boolean | {id: number};
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
}) => {
  return (
    <s.List>
      {!!headerTitle && <s.ListHeader>{headerTitle}</s.ListHeader>}
      {data?.map(
        ({id, title, icon, text, right, description, onPress}, index) => (
          <s.ListItem
            key={id || `${title}-${index}`}
            title={title}
            onPress={() => {
              if (onPress) {
                onPress?.();
              }
            }}
            onLongPress={event => {
              if (id) onLongPress?.(event, id);
            }}
            left={getListIcon(icon)}
            right={right ? () => right : getText(text)}
            description={description}
            selected={selected && selected?.id === id}
          />
        ),
      )}
    </s.List>
  );
};

export default List;
