import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {useDisableDrawer} from 'hooks/useDrawer';
import useTheme from './useTheme';
import CheckList from 'components/CheckList';

const Theme = () => {
  const {themes} = useTheme();
  // useDisableDrawer();

  return (
    <ScrollView>
      <CheckList data={themes} />
    </ScrollView>
  );
};

export default Theme;
