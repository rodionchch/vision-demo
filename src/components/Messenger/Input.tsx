import React from 'react';
import * as s from './styles';

const MessengerInput = () => {
  return (
    <s.MessengerInput>
      <s.MessengerTextInput placeholder={'Message'} />
      <s.MessengerSend>Send</s.MessengerSend>
    </s.MessengerInput>
  );
};

export default MessengerInput;
