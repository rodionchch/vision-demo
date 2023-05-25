import styled from 'styled-components/native';
import {Card, MD3Colors, Text, IconButton, TextInput} from 'react-native-paper';
import {iOS} from 'constants/Platform';

export const Messenger = styled.SafeAreaView`
  flex: 1;
`;

export const MessengerKeyboardAvoidingView = styled.KeyboardAvoidingView.attrs({
  behavior: iOS ? 'padding' : 'height',
  keyboardVerticalOffset: 130,
})`
  flex: 1;
`;

export const MessengerTouchableWithoutFeedback = styled.TouchableWithoutFeedback`
  flex: 1;
  background: red;
`;

export const MessengerChat = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
})`
  background: ${MD3Colors.neutral0};
  padding: 12px 12px 0;
`;

export const MessengerChatMessage = styled(Card).attrs({
  mode: 'contained',
})`
  margin-right: 18%;
  margin-bottom: 6px;
  border-radius: 16px;
  ${props =>
    props.me &&
    `
  background: ${MD3Colors.primary50};
  margin-right: 0;
  margin-left: 18%;`}
`;

export const MessengerChatMessageContent = styled(Card.Content)``;

export const MessengerChatMessageText = styled(Text)``;

export const MessengerInput = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 2px 0 8px;
`;

export const MessengerTextInput = styled(TextInput).attrs({
  mode: 'outlined',
  outlineStyle: {borderRadius: 24},
  dense: true,
  multiline: true,
  numberOfLines: 11,
})`
  flex: 1;
  max-height: 260px;
`;

export const MessengerSend = styled(IconButton).attrs({
  mode: 'contained',
  icon: 'arrow-up',
  size: 28,
})`
  margin-bottom: 0;
`;
