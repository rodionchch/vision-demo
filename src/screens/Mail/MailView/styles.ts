import styled from 'styled-components/native';
import {ScrollView} from 'react-native-gesture-handler';
import Mail from 'assets/images/mail.jpg';
import {Divider, Text} from 'react-native-paper';

export const MailView = styled(ScrollView)``;

export const MailViewHeader = styled.View`
  /* border-bottom-width: 1px;
  border-color: red; */
  padding: 16px 24px;
  flex-direction: row;
  align-items: center;
`;

export const MailViewHeaderContent = styled.View`
  flex: 1;
  margin-left: 12px;
`;

export const MailViewHeaderInner = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MailViewHeaderTitle = styled(Text).attrs({
  variant: 'titleMedium',
  ellipsizeMode: 'tail',
  numberOfLines: 1,
})`
  font-weight: bold;
`;

export const MailViewHeaderSubTitle = styled(Text).attrs({
  variant: 'titleMedium',
  ellipsizeMode: 'tail',
  numberOfLines: 1,
})<any>`
  color: #99999e;
  ${props => props.white && `color: #fff;`}
`;

export const MailViewHeaderDate = styled(Text).attrs({
  variant: 'titleSmall',
  ellipsizeMode: 'tail',
  numberOfLines: 1,
})`
  color: #99999e;
`;

export const MailViewDivider = styled(Divider)`
  margin-left: 24px;
`;

export const MailViewTitle = styled(Text).attrs({
  variant: 'titleLarge',
  ellipsizeMode: 'tail',
  numberOfLines: 3,
})`
  font-weight: bold;
  flex: 1;
  padding: 16px 24px;
`;

export const MailViewContent = styled.View`
  background: #fff;
`;

export const MailViewContentTitle = styled(Text).attrs({
  variant: 'headlineMedium',
  ellipsizeMode: 'tail',
})`
  color: #000;
  padding: 16px 24px;
`;

export const MailViewContentDivider = styled(Divider)`
  background: #dedede;
`;

export const MailViewContentText = styled(Text).attrs({
  variant: 'bodyLarge',
})`
  color: #000;
  padding: 48px 24px;
`;
