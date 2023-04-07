import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {useDisableDrawer} from 'hooks/useDrawer';
import CheckList from 'components/CheckList';
import useLanguage from './useLanguage';

const Language = () => {
  useDisableDrawer();
  const [language] = useLanguage();

  return (
    <ScrollView>
      <CheckList data={language} />
    </ScrollView>
  );
};

export default Language;
