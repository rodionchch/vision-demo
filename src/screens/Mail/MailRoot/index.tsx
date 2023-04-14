import React from 'react';

import Folders from 'components/Folders';
import Tags from 'components/Tags';
import FAB from 'components/FAB';
import useMailRoot from './useMailRoot';
import folders from './folders';
import tags from './tags';

import * as s from '../styles';

const MailRoot = () => {
  const {onScroll, tabsAll, tabs, velocity, extended} = useMailRoot();

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

export default MailRoot;
