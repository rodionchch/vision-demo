import React from 'react';
import {Checkbox, List} from 'react-native-paper';

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
    <List.Section>
      {data?.map(({id, label, checked, onPress}, index) => (
        <Checkbox.Item
          key={id || `${label}-${index}`}
          label={label}
          status={checked ? 'checked' : 'unchecked'}
          onPress={onPress}
        />
      ))}
    </List.Section>
  );
};

export default CheckList;
