import React from 'react';

import {useToggleDrawer} from 'hooks/useDrawer';
import Folders from 'components/Folders';
import Tags from 'components/Tags';
import FAB from 'components/FAB';
import useMail from './useMail';
import folders from './folders';
import tags from './tags';

import * as s from './styles';

const Mail = () => {
  const {onScroll, tabsAll, tabs, velocity, extended} = useMail();
  useToggleDrawer();

  return (
    <>
      <s.Mail onScroll={onScroll}>
        <Folders
          title={'Unified Folders'}
          data={folders}
          screen="Mail"
          tabs={tabsAll}
        />
        <Tags data={tags} tabs={tabs} screen="Mail" />
        <s.MailPlug />
      </s.Mail>

      <FAB
        visible={true}
        animatedValue={velocity}
        extended={extended}
        label={'New Message'}
        animateFrom={'right'}
        iconMode={'static'}
      />
    </>
  );
};

export default Mail;
