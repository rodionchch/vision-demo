import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import useTheme from './useTheme';
import CheckList from 'components/CheckList';

const Theme = () => {
  const {themes} = useTheme();

  return (
    <ScrollView>
      <CheckList data={themes} />
    </ScrollView>
  );
};

export default Theme;
