import React from 'react';

import * as s from './styles';

type ListByKeyProps = {
  data: {
    [key: string]: {
      id?: number;
      title: string;
      description: string;
      icon?: string;
      text?: string;
    };
  }[];
};

const getListIcon = (icon?: string) => () =>
  icon && <s.ListByKeyItemIcon icon={icon} />;

const getText = (text?: string) => () =>
  text !== undefined && <s.ListByKeyItemText>{text}</s.ListByKeyItemText>;

const ListByKey: React.FC<ListByKeyProps> = ({data}) => {
  return (
    <s.ListByKey>
      {Object.keys(data)?.map((key, index) => (
        <s.ListByKey key={`${key}-${index}`}>
          <s.ListByKeyItem title={key} byKey />

          {data[key]?.map(({title, description, icon, text}, index) => (
            <s.ListByKeyItem
              key={index}
              title={title}
              description={description}
              left={getListIcon(icon)}
              right={getText(text)}
              onPress={() => {}}
            />
          ))}
        </s.ListByKey>
      ))}
    </s.ListByKey>
  );
};

export default ListByKey;
