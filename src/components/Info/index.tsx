import React from 'react';

import * as s from './styles';
import List from 'components/List';
import data from './data';

type InfoProps = {};

const Info: React.FC<InfoProps> = () => {
  return (
    <s.Info>
      <List data={data} />
    </s.Info>
  );
};

export default Info;
