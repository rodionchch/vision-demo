import styled from 'styled-components/native';
import {ScrollView} from 'react-native-gesture-handler';
import {MD3Colors, TextInput} from 'react-native-paper';

export const EditBook = styled(ScrollView)`
  padding: 20px 12px;
`;

export const EditBookInput = styled(TextInput).attrs({
  mode: 'outlined',
})`
  background: ${MD3Colors.secondary10};
  margin-bottom: 20px;
`;
