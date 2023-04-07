import React from 'react';
import {View} from 'react-native';

import {useDisableDrawer} from 'hooks/useDrawer';
import List from 'components/List';
import {language} from '../settingsData';

const Language = () => {
  useDisableDrawer();

  return (
    <View>
      <List data={language} />
    </View>
  );
};

export default Language;
