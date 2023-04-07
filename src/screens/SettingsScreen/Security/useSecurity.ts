import {useState} from 'react';
import {Switch} from './';

const useSecurity = () => {
  const [switchValue, setSwitchValue] = useState(true);
  const security = [
    {
      title: 'Real PIN',
      onPress: () => {},
    },
    {
      title: 'Fake PIN',
      onPress: () => {},
    },
    {
      title: 'Face ID',
      right: Switch({
        value: switchValue,
        onChange: () => {
          setSwitchValue(!switchValue);
        },
      }),
    },
  ];

  return [security];
};

export default useSecurity;
