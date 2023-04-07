import React from 'react';
import {View} from 'react-native';

import {useEnableDrawer} from 'hooks/useDrawer';
import List from 'components/List';
import settings from '../settingsData';

const Settings = () => {
  useEnableDrawer();

  return (
    <View>
      <List data={settings} />
    </View>
  );
};

export default Settings;
