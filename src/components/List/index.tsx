import React, {ReactNode} from 'react';

import * as s from './styles';
import {useNavigation} from '@react-navigation/native';

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
};

const getListIcon = (icon?: string) => () =>
  icon && <s.ListItemIcon icon={icon} />;

const getText = (text?: string) => () =>
  text !== undefined && <s.ListItemText>{text}</s.ListItemText>;

const List: React.FC<ListProps> = ({title: headerTitle, data}) => {
  const {navigate} = useNavigation();

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
                navigate(id);
              }
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
