import React, {ReactNode} from 'react';

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
  }[];
};

const getListIcon = (icon?: string) => () =>
  icon && <s.ListItemIcon icon={icon} />;

const getText = (text?: string) => () =>
  text !== undefined && <s.ListItemText>{text}</s.ListItemText>;

const List: React.FC<ListProps> = ({title: headerTitle, data}) => {
  return (
    <s.List>
      {!!headerTitle && <s.ListHeader>{headerTitle}</s.ListHeader>}
      {data?.map(({id, title, icon, text, right, onPress}, index) => (
        <s.ListItem
          key={id || `${title}-${index}`}
          title={title}
          onPress={onPress}
          left={getListIcon(icon)}
          right={right ? () => right : getText(text)}
        />
      ))}
    </s.List>
  );
};

export default List;
