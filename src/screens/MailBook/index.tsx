import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import NavigationType from 'types/NavigationType';
import {useToggleDrawer} from 'hooks/useDrawer';
import Folders from 'components/Folders';
import folders from './folders';

import * as s from './styles';

const MailBook = () => {
  useToggleDrawer();

  const {setOptions} = useNavigation();
  const {params} = useRoute<NavigationType>();

  useEffect(() => {
    setOptions({animation: params?.fromDrawer ? 'none' : 'default'});
  });

  return (
    <s.MailBook>
      <Folders data={folders} />
    </s.MailBook>
  );
};

export default MailBook;
