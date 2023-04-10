import React from 'react';

import * as s from './styles';

type ListByKeyProps = {
  data: {
    [key: string]: {
      id?: number;
      title: string;
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
  console.log('data===>', data);
  return (
    <s.ListByKey>
      {Object.keys(data)?.map((key, index) => (
        <s.ListByKey key={`${key}-${index}`}>
          <s.ListByKeyItem title={key} byKey />

          {data[key]?.map(({title, icon, text}, index) => (
            <s.ListByKeyItem
              key={index}
              title={title}
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
