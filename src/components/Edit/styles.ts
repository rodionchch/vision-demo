import {MD3Colors, TextInput} from 'react-native-paper';
import styled from 'styled-components/native';

export const Edit = styled.View`
  padding: 20px 12px;
`;

export const EditInput = styled(TextInput).attrs({
  mode: 'outlined',
})`
  background: ${MD3Colors.secondary10};
  margin-bottom: 20px;
`;
