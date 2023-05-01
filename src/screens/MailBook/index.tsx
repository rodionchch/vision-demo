import React from 'react';

import {useToggleDrawer} from 'hooks/useDrawer';
import Folders from 'components/Folders';
import folders from './folders';

import * as s from './styles';

const MailBook = () => {
  useToggleDrawer();
  return (
    <s.MailBook>
      <Folders data={folders} />
    </s.MailBook>
  );
};

export default MailBook;
