import React, {useEffect} from 'react';

import {useNavigation, useRoute} from '@react-navigation/native';
import NavigationType from 'types/NavigationType';
import {useToggleDrawer} from 'hooks/useDrawer';
import Tabs from 'components/Tabs';
import ListByKey from 'components/ListByKey';
import FAB from 'components/FAB';
import useFAB from 'hooks/useFAB';
import {tabs, groups, contacts, myPhoneNumbers} from './data';

import * as s from './styles';

const PhoneBook = () => {
  useToggleDrawer();
  const {setOptions} = useNavigation();
  const {params} = useRoute<NavigationType>();

  useEffect(() => {
    setOptions({animation: params?.fromDrawer ? 'none' : 'default'});
  });

  const {velocity, extended, onScroll} = useFAB();

  return (
    <s.PhoneBook>
      <Tabs tabs={tabs}>
        {[
          <>
            <s.PhoneBookList onScroll={onScroll}>
              <ListByKey data={groups} />
            </s.PhoneBookList>
            <FAB
              visible={true}
              animatedValue={velocity}
              extended={extended}
              label={'Add Group    '}
              animateFrom={'right'}
              iconMode={'static'}
            />
          </>,

          <s.PhoneBookList>
            <ListByKey data={contacts} />
          </s.PhoneBookList>,

          <s.PhoneBookList>
            <ListByKey data={myPhoneNumbers} />
          </s.PhoneBookList>,
        ]}
      </Tabs>
    </s.PhoneBook>
  );
};

export default PhoneBook;
