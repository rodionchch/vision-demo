import React from 'react';
import {View} from 'react-native';

import List from 'components/List';
import settings from '../settingsData';

const Settings = () => {
  return (
    <View>
      <List data={settings} />
    </View>
  );
};

export default Settings;
