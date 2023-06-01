import styled from 'styled-components/native';
import {Divider, List, Text, TextInput} from 'react-native-paper';

export const SmsChatHeader = styled(List.Section)``;

export const SmsChatHeaderItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
`;

export const SmsChatHeaderItemLabel = styled(Text).attrs({
  variant: 'titleSmall',
})`
  margin-top: 2px;
`;

export const SmsChatHeaderInput = styled(TextInput).attrs({
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

export const SmsChatDivider = styled(Divider)`
  margin-left: 16px;
`;
