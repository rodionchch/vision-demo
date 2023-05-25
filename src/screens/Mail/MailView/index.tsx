import React from 'react';

import * as s from './styles';

const MailView = () => {
  return (
    <>
      <s.MailView>
        <s.MailViewContent />
      </s.MailView>
      <s.MailViewActions>
        <s.MailViewAction icon="reply" onPress={() => {}} />
        <s.MailViewAction icon="reply-all" onPress={() => {}} />
        <s.MailViewAction icon="share" onPress={() => {}} />
        <s.MailViewAction icon="delete" onPress={() => {}} />
        <s.MailViewAction icon="heart" onPress={() => {}} />
      </s.MailViewActions>
    </>
  );
};

export default MailView;
