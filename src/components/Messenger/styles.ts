import styled from 'styled-components/native';
import {
  Card,
  MD3Colors,
  Text,
  IconButton,
  TextInput,
  Chip,
} from 'react-native-paper';
import {isAndroid, isIOS} from 'constants/Platform';
import {ScrollView} from 'react-native-gesture-handler';

export const Messenger = styled.SafeAreaView`
  flex: 1;
`;

export const MessengerKeyboardAvoidingView = styled.KeyboardAvoidingView.attrs<{
  to?: boolean;
}>(props => ({
  behavior: isIOS ? 'padding' : 'height',
  keyboardVerticalOffset: props?.to ? 182 : 118,
}))<any>`
  flex: 1;
`;

export const MessengerTouchableWithoutFeedback = styled.TouchableWithoutFeedback`
  flex: 1;
`;

export const MessengerChat = styled<any>(ScrollView).attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
  transform: scaleY(-1);
  padding-left: 12px;
  padding-right: 12px;
`;

export const MessengerChatInner = styled.View`
  transform: scaleY(-1);
  flex: 1;
`;

export const MessengerChatMessageDate = styled(Chip).attrs(props => ({
  compact: true,
  textStyle: {
    textAlign: 'right',
    color: props.theme.colors.onSurface,
  },
}))`
  background: ${props => props.theme.colors.inverseOnSurface};
  align-self: center;
  margin: 4px 0 8px;
  height: 32px;
`;

export const MessengerChatMessageContent = styled(Card.Content)``;

export const MessengerChatMessageText = styled(Text).attrs({
  variant: 'bodyMedium',
})``;

export const MessengerInput = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 2px 0 8px;
  ${() => isAndroid && `padding: 0 2px 8px 8px;`}
`;

export const MessengerTextInput = styled(TextInput).attrs({
  mode: 'outlined',
  outlineStyle: {borderRadius: 24},
  dense: true,
  multiline: isIOS,
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

export const MessengerChatMessage = styled(Card).attrs({
  mode: 'contained',
})<any>`
  background: ${props => props.theme?.colors.card};
  margin-right: 18%;
  align-self: flex-start;
  margin-bottom: 4px;
  border-radius: 16px;
  ${props =>
    props.me &&
    `
  background: ${props.theme?.colors.tertiaryContainer};
  margin-right: 0;
  margin-left: 18%;
  align-self: flex-end;
  `}
`;
