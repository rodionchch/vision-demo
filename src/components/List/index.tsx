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
};

const getListIcon = (icon?: string) => () =>
  icon && <s.ListItemIcon icon={icon} />;

const getText = (text?: string) => () =>
  text !== undefined && <s.ListItemText>{text}</s.ListItemText>;

const List: React.FC<ListProps> = ({title: headerTitle, data, onLongPress}) => {
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
              } else {
                // navigate(id);
              }
            }}
            onLongPress={event => {
              if (id) onLongPress?.(event, id);
            }}
            left={getListIcon(icon)}
            right={right ? () => right : getText(text)}
            description={description}
          />
        ),
      )}
    </s.List>
  );
};

export default List;
