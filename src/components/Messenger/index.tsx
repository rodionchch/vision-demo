import React from 'react';
import * as s from './styles';
import MessengerChat from './Chat';
import MessengerInput from './Input';

const Messenger = () => {
  return (
    <s.Messenger>
      <s.MessengerKeyboardAvoidingView>
        {/* <s.MessengerTouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <MessengerChat />
        {/* </s.MessengerTouchableWithoutFeedback> */}
        <MessengerInput />
      </s.MessengerKeyboardAvoidingView>
    </s.Messenger>
  );
};

export default Messenger;
