import React from 'react';

import Messenger from 'components/Messenger';
import useSmsChat from './useSmsChat';

import * as s from './styles';

const SmsChat = () => {
  const {message, messages, onChange, onSend, params} = useSmsChat();

  return (
    <>
      {!params?.id && (
        <s.SmsChatHeader>
          <s.SmsChatHeaderItem>
            <s.SmsChatHeaderItemLabel>To:</s.SmsChatHeaderItemLabel>
            <s.SmsChatHeaderInput />
          </s.SmsChatHeaderItem>
          <s.SmsChatDivider />
        </s.SmsChatHeader>
      )}

      <Messenger
        to={!params?.id}
        message={message}
        messages={messages}
        onChange={onChange}
        onSend={onSend}
      />
    </>
  );
};

export default SmsChat;
