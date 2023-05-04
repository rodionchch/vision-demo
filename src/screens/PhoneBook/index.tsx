import React, {useEffect} from 'react';

import {useNavigation, useRoute} from '@react-navigation/native';
import NavigationType from 'types/NavigationType';
import {useToggleDrawer} from 'hooks/useDrawer';
import Folders from 'components/Folders';
import ListByKey from 'components/ListByKey';
import data from 'components/ListByKey/data';
import folders from './folders';

import * as s from './styles';

const PhoneBook = () => {
  useToggleDrawer();
  const {setOptions} = useNavigation();
  const {params} = useRoute<NavigationType>();

  useEffect(() => {
    setOptions({animation: params?.fromDrawer ? 'none' : 'default'});
  });

  return (
    <s.PhoneBook>
      <Folders data={folders} />
      <ListByKey data={data} />
    </s.PhoneBook>
  );
};

export default PhoneBook;
