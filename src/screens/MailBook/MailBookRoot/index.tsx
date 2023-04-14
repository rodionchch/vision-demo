import React from 'react';

import Folders from 'components/Folders';
import folders from './folders';

import * as s from '../styles';

const MailBookRoot = () => {
  return (
    <s.MailBook>
      <Folders data={folders} />
    </s.MailBook>
  );
};

export default MailBookRoot;
