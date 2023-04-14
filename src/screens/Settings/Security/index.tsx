import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Switch as PaperSwitch} from 'react-native-paper';

import {useDisableDrawer} from 'hooks/useDrawer';
import List from 'components/List';
import useSecurity from './useSecurity';

type SwitchProps = {
  value: boolean;
  onChange: () => void;
};

export const Switch = ({value, onChange}: SwitchProps) => (
  <PaperSwitch value={value} onValueChange={onChange} />
);

const Security = () => {
  // useDisableDrawer();

  const {security} = useSecurity();

  return (
    <ScrollView>
      <List data={security} />
    </ScrollView>
  );
};

export default Security;
