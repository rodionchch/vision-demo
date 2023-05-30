import styled from 'styled-components/native';
import {IconButton} from 'react-native-paper';

export const MailActions = styled.SafeAreaView`
  height: 92px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const MailAction = styled(IconButton).attrs({
  size: 28,
})``;
