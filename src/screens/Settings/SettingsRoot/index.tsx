import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {useToggleDrawer} from 'hooks/useDrawer';
import List from 'components/List';
import useSettingsRoot from './useSettingsRoot';

const SettingsRoot = () => {
  const {settings} = useSettingsRoot();
  useToggleDrawer();

  return (
    <ScrollView>
      <List data={settings} />
    </ScrollView>
  );
};

export default SettingsRoot;
