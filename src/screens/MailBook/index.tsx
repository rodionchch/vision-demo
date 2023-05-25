import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import NavigationType from 'types/NavigationType';
import {useToggleDrawer} from 'hooks/useDrawer';
import Tabs from 'components/Tabs';
import ListByKey from 'components/ListByKey';
import {tabs, groups, contacts, myMailboxes} from './data';

import * as s from './styles';
import useFAB from 'hooks/useFAB';
import FAB from 'components/FAB';

const MailBook = () => {
  useToggleDrawer();

  const {setOptions} = useNavigation();
  const {params} = useRoute<NavigationType>();

  useEffect(() => {
    setOptions({animation: params?.fromDrawer ? 'none' : 'default'});
  });

  const {velocity, extended, onScroll} = useFAB();

  return (
    <s.MailBook>
      <Tabs tabs={tabs}>
        {[
          <>
            <s.MailBookList onScroll={onScroll}>
              <ListByKey data={groups} />
            </s.MailBookList>
            <FAB
              visible={true}
              animatedValue={velocity}
              extended={extended}
              label={'Add Group    '}
              animateFrom={'right'}
              iconMode={'static'}
            />
          </>,

          <s.MailBookList>
            <ListByKey data={contacts} />
          </s.MailBookList>,
          <s.MailBookList>
            <ListByKey data={myMailboxes} />
          </s.MailBookList>,
        ]}
      </Tabs>
    </s.MailBook>
  );
};

export default MailBook;
