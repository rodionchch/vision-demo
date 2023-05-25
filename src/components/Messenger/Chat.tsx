import React from 'react';
import * as s from './styles';

const MessengerChat = () => {
  return (
    <s.MessengerChat>
      <s.MessengerChatMessage me>
        <s.MessengerChatMessageContent>
          <s.MessengerChatMessageText>
            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
            Cicero are also reproduced in their exact original form, accompanied
            by English versions from the 1914 translation by H. Rackham.
          </s.MessengerChatMessageText>
        </s.MessengerChatMessageContent>
      </s.MessengerChatMessage>
      <s.MessengerChatMessage>
        <s.MessengerChatMessageContent>
          <s.MessengerChatMessageText>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </s.MessengerChatMessageText>
        </s.MessengerChatMessageContent>
      </s.MessengerChatMessage>
      <s.MessengerChatMessage>
        <s.MessengerChatMessageContent>
          <s.MessengerChatMessageText>
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout.
          </s.MessengerChatMessageText>
        </s.MessengerChatMessageContent>
      </s.MessengerChatMessage>
      <s.MessengerChatMessage>
        <s.MessengerChatMessageContent>
          <s.MessengerChatMessageText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </s.MessengerChatMessageText>
        </s.MessengerChatMessageContent>
      </s.MessengerChatMessage>
      <s.MessengerChatMessage me>
        <s.MessengerChatMessageContent>
          <s.MessengerChatMessageText>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested.
          </s.MessengerChatMessageText>
        </s.MessengerChatMessageContent>
      </s.MessengerChatMessage>
    </s.MessengerChat>
  );
};

export default MessengerChat;
