import React from 'react';

import {useToggleDrawer} from 'hooks/useDrawer';
import Folders from 'components/Folders';
import Tags from 'components/Tags';
import useMail from './useMail';
import folders from './folders';
import tags from './tags';

import * as s from './styles';

const Mail = () => {
  const {tabsAll, tabs} = useMail();
  useToggleDrawer();

  return (
    <s.Mail>
      <Folders
        title={'Unified Folders'}
        data={folders}
        screen="Mail"
        tabs={tabsAll}
      />
      <Tags data={tags} tabs={tabs} screen="Mail" />
    </s.Mail>
  );
};

export default Mail;
