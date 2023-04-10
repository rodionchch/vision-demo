import React from 'react';

import Folders from 'components/Folders';
import ListByKey from 'components/ListByKey';
import data from 'components/ListByKey/data';
import folders from './folders';

import * as s from './styles';

const PhoneBook = () => {
  return (
    <s.PhoneBook>
      <Folders data={folders} />
      <ListByKey data={data} />
    </s.PhoneBook>
  );
};

export default PhoneBook;
