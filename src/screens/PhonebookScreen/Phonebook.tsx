import React from 'react';

import Folders from 'components/Folders';
import folders from './folders';

import * as s from './styles';

const PhoneBook = () => {
  return (
    <s.PhoneBook>
      <Folders data={folders} />
    </s.PhoneBook>
  );
};

export default PhoneBook;
