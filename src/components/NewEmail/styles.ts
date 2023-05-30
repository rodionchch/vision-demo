import styled from 'styled-components/native';
import {ScrollView} from 'react-native-gesture-handler';
import {Divider, List, MD3Colors, Text, TextInput} from 'react-native-paper';

export const NewEmail = styled(ScrollView)``;

export const NewEmailHeader = styled(List.Section)``;

export const NewEmailHeaderItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
`;

export const NewEmailHeaderItemLabel = styled(Text).attrs({
  variant: 'titleSmall',
})`
  margin-top: 2px;
`;

export const NewEmailHeaderInput = styled(TextInput).attrs({
  mode: 'outlined',
  outlineStyle: {
    borderWidth: 0,
  },
})`
  flex: 1;
  background: transparent;
  height: 32px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const NewEmailTextArea = styled(TextInput).attrs({
  mode: 'outlined',
  multiline: true,
  outlineStyle: {
    borderWidth: 0,
  },
})`
  flex: 1;
  background: transparent;
  font-size: 14px;
  font-weight: 500;
  min-height: 100%;
  margin-bottom: 8px;
`;

export const NewEmailDivider = styled(Divider)`
  margin-left: 16px;
`;
