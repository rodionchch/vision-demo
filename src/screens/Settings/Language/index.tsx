import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import CheckList from 'components/CheckList';
import useLanguage from './useLanguage';

const Language = () => {
  const {language} = useLanguage();

  return (
    <ScrollView>
      <CheckList data={language} />
    </ScrollView>
  );
};

export default Language;
