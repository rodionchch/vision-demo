import React from 'react';
import {View} from 'react-native';

import useDisableDrawer from 'hooks/useDisableDrawer';
import useTheme from './useTheme';
import List from 'components/List';

const Theme = () => {
  const [themes] = useTheme();
  useDisableDrawer();

  return (
    <View>
      <List data={themes} />
    </View>
  );
};

export default Theme;
