import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {useEnableDrawer} from 'hooks/useDrawer';
import List from 'components/List';
import useSettings from './useSettings';

const Settings = () => {
  const [settings] = useSettings();
  // useEnableDrawer();

  return (
    <ScrollView>
      <List data={settings} />
    </ScrollView>
  );
};

export default Settings;
