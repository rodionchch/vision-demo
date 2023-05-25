import {ScrollView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Mail from 'assets/images/mail.jpg';
import {IconButton} from 'react-native-paper';

export const MailView = styled(ScrollView)``;

export const MailViewContent = styled.Image.attrs({
  source: Mail,
})`
  width: 100%;
  height: 2000px;
  resize-mode: contain;
`;

export const MailViewActions = styled.SafeAreaView`
  height: 92px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const MailViewAction = styled(IconButton).attrs({
  size: 28,
})``;
