import React from 'react';
import {View} from 'react-native';

import useDisableDrawer from 'hooks/useDisableDrawer';
import List from 'components/List';
import {security} from '../settingsData';

const Security = () => {
  useDisableDrawer();

  return (
    <View>
      <List data={security} />
    </View>
  );
};

export default Security;
