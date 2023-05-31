import React, {useEffect, useRef} from 'react';
import * as s from './styles';
import MessengerInput from './Input';
import {Keyboard, ScrollView} from 'react-native';

type MessengerProps = {
  message: string;
  messages: {
    id: number;
    message?: string;
    date?: string;
    me?: boolean;
  }[];
  onChange: (text: string) => void;
  onSend: () => void;
};

const Messenger: React.FC<MessengerProps> = ({
  message: messageValue,
  messages,
  onChange,
  onSend,
}) => {
  const chatRef = useRef<ScrollView>();

  // useEffect(() => {
  //   chatRef.current?.scrollToEnd?.({animated: false});
  // }, []);

  return (
    <s.Messenger>
      <s.MessengerKeyboardAvoidingView>
        <s.MessengerTouchableWithoutFeedback
          onPress={() => {
            // Keyboard.dismiss();
          }}>
          <s.MessengerChat
            ref={chatRef}
            onContentSizeChange={() => {
              chatRef.current?.scrollTo({y: -100, animated: true});
            }}>
            <s.MessengerChatInner>
              {messages?.map(({id, date, message, me}) => {
                if (date) {
                  return (
                    <s.MessengerChatMessageDate>
                      {date}
                    </s.MessengerChatMessageDate>
                  );
                }
                return (
                  <s.MessengerChatMessage key={id} me={me}>
                    <s.MessengerChatMessageContent>
                      <s.MessengerChatMessageText>
                        {message}
                      </s.MessengerChatMessageText>
                    </s.MessengerChatMessageContent>
                  </s.MessengerChatMessage>
                );
              })}
            </s.MessengerChatInner>
          </s.MessengerChat>
        </s.MessengerTouchableWithoutFeedback>

        <MessengerInput
          value={messageValue}
          onChange={onChange}
          onSend={onSend}
        />
      </s.MessengerKeyboardAvoidingView>
    </s.Messenger>
  );
};

export default Messenger;
