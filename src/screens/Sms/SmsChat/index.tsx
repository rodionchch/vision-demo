import React from 'react';

import Messenger from 'components/Messenger';
import useSmsChat from './useSmsChat';

const SmsChat = () => {
  const {message, messages, onChange, onSend} = useSmsChat();

  return (
    <Messenger
      message={message}
      messages={messages}
      onChange={onChange}
      onSend={onSend}
    />
  );
};

export default SmsChat;
