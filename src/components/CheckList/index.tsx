import React from 'react';

import * as s from './styles';

type CheckListProps = {
  data: {
    id?: number;
    label: string;
    checked: boolean;
    onPress?: () => void;
  }[];
};

const CheckList: React.FC<CheckListProps> = ({data}) => {
  return (
    <s.CheckList>
      {data?.map(({id, label, checked, onPress}, index) => (
        <s.CheckListItem
          key={id || `${label}-${index}`}
          label={label}
          status={checked ? 'checked' : 'unchecked'}
          onPress={onPress}
        />
      ))}
    </s.CheckList>
  );
};

export default CheckList;
